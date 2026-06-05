"use client";

import {
  Modal,
  Button,
  Group,
  Stack,
  Text,
  Select,
  Textarea,
  Box,
  Alert,
} from "@mantine/core";
import { IconAlertCircle, IconSend } from "@tabler/icons-react";
import { useState } from "react";

interface LecturerSendEmailModalProps {
  opened: boolean;
  onClose: () => void;
  studentName?: string;
  studentEmail?: string;
}

export default function LecturerSendEmailModal({
  opened,
  onClose,
  studentName = "Student",
  studentEmail = "",
}: LecturerSendEmailModalProps) {
  const [emailType, setEmailType] = useState<string | null>("announcement");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const emailTemplates: Record<
    string,
    { subject: string; message: string; hint: string }
  > = {
    credentials: {
      subject: "Your Course Login Credentials",
      message: `Dear ${studentName},\n\nIf you did not receive your login credentials, here they are:\n\nUsername: ${studentEmail}\nPassword: [Generated Password]\n\nPlease log in and change your password immediately for security.\n\nBest regards,\nYour Lecturer`,
      hint: "Send login credentials to student",
    },
    announcement: {
      subject: "Course Announcement",
      message: `Dear ${studentName},\n\n`,
      hint: "Send a general announcement",
    },
    reminder: {
      subject: "Assignment Reminder",
      message: `Dear ${studentName},\n\nThis is a friendly reminder about the upcoming assignment submission deadline.\n\nPlease ensure you submit your work on time.\n\nBest regards,\nYour Lecturer`,
      hint: "Send a reminder notification",
    },
    feedback: {
      subject: "Your Assignment Feedback",
      message: `Dear ${studentName},\n\nI have reviewed your assignment. Here are my comments:\n\n`,
      hint: "Send assignment feedback to student",
    },
  };

  const handleEmailTypeChange = (value: string | null) => {
    setEmailType(value);
    if (value && emailTemplates[value]) {
      setSubject(emailTemplates[value].subject);
      setMessage(emailTemplates[value].message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!subject.trim() || !message.trim()) {
      alert("Please fill in both subject and message");
      return;
    }

    setIsSending(true);

    try {
      // TODO: Implement actual email sending logic
      // Example: await sendStudentEmail({ email: studentEmail, subject, message });
      console.log("Sending email to:", studentEmail);
      console.log("Type:", emailType);
      console.log("Subject:", subject);
      console.log("Message:", message);

      // Simulate email sending delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert(`Email sent successfully to ${studentName}!`);
      handleClose();
    } catch (error) {
      alert("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = () => {
    setEmailType("announcement");
    setSubject("");
    setMessage("");
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={`Send Email to ${studentName}`}
      size="lg"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <Box>
            <Text fz={12} fw={600} c="dimmed" mb={4}>
              Recipient
            </Text>
            <Text fz={14} fw={500}>
              {studentName} ({studentEmail})
            </Text>
          </Box>

          <Select
            label="Email Type"
            placeholder="Select email type"
            value={emailType}
            onChange={handleEmailTypeChange}
            data={[
              {
                value: "credentials",
                label: "📝 Send Credentials",
                description: "Resend login credentials",
              },
              {
                value: "announcement",
                label: "📢 Announcement",
                description: "Course or assignment announcement",
              },
              {
                value: "reminder",
                label: "⏰ Reminder",
                description: "Assignment deadline reminder",
              },
              {
                value: "feedback",
                label: "💬 Feedback",
                description: "Assignment or performance feedback",
              },
            ]}
          />

          {emailType === "credentials" && (
            <Alert
              icon={<IconAlertCircle size={16} />}
              color="blue"
              title="Credentials Email"
            >
              This will send the student their login credentials. Make sure they
              reset their password after receiving this email.
            </Alert>
          )}

          <div>
            <Text fz={12} fw={600} c="dimmed" mb={4}>
              Subject
            </Text>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject"
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid var(--mantine-color-gray-3)",
                borderRadius: "var(--mantine-radius-sm)",
                fontSize: "14px",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div>
            <Text fz={12} fw={600} c="dimmed" mb={4}>
              Message
            </Text>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={8}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid var(--mantine-color-gray-3)",
                borderRadius: "var(--mantine-radius-sm)",
                fontSize: "14px",
                fontFamily: "monospace",
                resize: "vertical",
              }}
            />
          </div>

          <Group justify="flex-end" mt="lg">
            <Button
              variant="default"
              onClick={handleClose}
              disabled={isSending}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color="indigo"
              leftSection={<IconSend size={14} />}
              loading={isSending}
              disabled={isSending}
            >
              Send Email
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
