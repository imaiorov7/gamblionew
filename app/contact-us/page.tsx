"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import CTASection from "@/components/cta-section";
import DashedBorder from "@/components/shared/dashed-border";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Description, H1, Title } from "@/components/ui/typography";
export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    role: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission - replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      console.log(formData);
      toast.success("Thank you for your message! We'll get back to you soon.");

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        role: "",
        email: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <DashedBorder
        sides="x"
        className="relative flex flex-col items-center justify-center py-20 md:py-32"
      >
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 text-center max-w-3xl px-4"
        >
          <H1 className="font-medium text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s build your{" "}
            <span className="text-primary">advantage</span>.
          </H1>
          <Description className="text-lg md:text-xl text-muted-foreground">
            Ready to optimize efficiency, scale, engagement and unlock the power
            of AI-driven insights?
          </Description>
        </motion.div>
      </DashedBorder>

      {/* Contact Form Section */}
      <DashedBorder sides="x" className="py-12">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <Title className="text-2xl md:text-3xl">Contact us</Title>
              <FieldDescription className="text-center">
                Enter your information to get in touch with our team.
              </FieldDescription>
            </div>

            <form onSubmit={handleSubmit}>
              <FieldSet>
                <FieldGroup>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="firstName">First name</FieldLabel>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="company">Company</FieldLabel>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="role">Role (Optional)</FieldLabel>
                      <Input
                        id="role"
                        name="role"
                        type="text"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Role (Optional)"
                      />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="email">E-mail</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">Message...</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message..."
                      rows={6}
                    />
                  </Field>

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 text-white cursor-pointer"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </FieldGroup>
              </FieldSet>
            </form>
          </motion.div>
        </div>
      </DashedBorder>

      {/* CTA Section */}
      <CTASection
        title="Ready to see how it all connects to you?"
        description="Gamblio combines all three tools into one platform, so your analytics, recommendations, and support work together to maximize player value."
      />
    </div>
  );
}
