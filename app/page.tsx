"use client";

import type React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import dotenv from "dotenv";
import { AlertCircle, Check, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
dotenv.config();

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // make a post request to https://n8n.hogwarts.dev/webhook-test/6bc7c20d-a03e-4146-bd17-686a053140cf
      // with the email address
      await fetch("/api/webhook-proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/phish-background.png"
          alt="Gradient background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center flex-1 px-4 py-12 mx-auto text-white">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Logo and fish image */}
            <div className="relative w-full max-w-xs lg:max-w-sm animate-float">
              <Image
                src="/images/phish-logo.png"
                alt="Phish Directory Logo"
                width={400}
                height={400}
                className="object-contain rounded-2xl"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                  phish.directory UI
                </h1>
                <p className="text-xl md:text-2xl font-medium text-white/90">
                  Navigate safely. Identify phishing sites instantly. All from a
                  single dashboard.
                </p>
              </div>

              <Badge
                variant="outline"
                className="bg-eastern-blue/20 text-white border-eastern-blue px-3 py-1 text-sm"
              >
                Coming Soon
              </Badge>

              <Card className="bg-white/10 border-gulf-stream/30 text-white shadow-lg backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">
                    Powerful Protection Features
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Our intuitive UI helps you identify and report phishing
                    attempts with ease.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <div className="bg-eastern-blue rounded-full p-1 mt-0.5">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm">
                        Real-time phishing detection
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-eastern-blue rounded-full p-1 mt-0.5">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm">
                        Community-driven reporting system
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-eastern-blue rounded-full p-1 mt-0.5">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm">
                        Unique forwarding email for phishing reports
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-eastern-blue rounded-full p-1 mt-0.5">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm">
                        Comprehensive scan history tracking
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-eastern-blue rounded-full p-1 mt-0.5">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm">
                        Seamless browser integration
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-eastern-blue rounded-full p-1 mt-0.5">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm">
                        Advanced threat analytics dashboard
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Separator className="bg-white/20" />

              {/* Waitlist form */}
              {!isSuccess ? (
                <Card className="bg-white/10 border-gulf-stream/30 shadow-lg backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">
                      Join the Waitlist
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Be the first to access our powerful tools designed to
                      protect your digital presence.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-grow">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/10 border-gulf-stream/50 text-white placeholder:text-white/70 pl-10"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-eastern-blue hover:bg-eastern-blue/90 text-white"
                        >
                          {isSubmitting ? "Submitting..." : "Join Now"}
                        </Button>
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 text-red-300 text-sm">
                          <AlertCircle size={16} />
                          <span>{error}</span>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Alert className="bg-eastern-blue/20 border-eastern-blue/50 text-white">
                  <Check className="h-4 w-4 text-white" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Thank you for joining our waitlist! We'll notify you when
                    phish.directory is ready to launch.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full mt-16 text-center text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} phish.directory. All rights reserved.
          </p>
          <p className="mt-1">
            Protecting your digital presence from phishing attempts.
          </p>
        </footer>
      </div>
    </main>
  );
}
