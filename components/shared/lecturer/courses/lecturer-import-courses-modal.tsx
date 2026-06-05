"use client";

import {
  Modal,
  Button,
  Group,
  Stack,
  Text,
  FileInput,
  Box,
  Progress,
  Badge,
  Alert,
} from "@mantine/core";
import { IconUpload, IconAlertCircle, IconCheck } from "@tabler/icons-react";
import { useState } from "react";

interface LecturerImportCoursesModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LecturerImportCoursesModal({
  opened,
  onClose,
}: LecturerImportCoursesModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      const validExtensions = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
      ];

      if (!validExtensions.includes(selectedFile.type)) {
        setErrorMessage("Please upload a valid Excel file (.xlsx or .xls)");
        setUploadStatus("error");
        return;
      }

      setFile(selectedFile);
      setUploadStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage("Please select a file");
      setUploadStatus("error");
      return;
    }

    setIsProcessing(true);
    setUploadProgress(0);

    // Simulate file upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 30;
      });
    }, 300);

    try {
      // TODO: Implement actual file upload logic
      // Example: const response = await uploadCoursesFile(file);
      console.log("Uploading file:", file);

      // Simulate completion
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setUploadProgress(100);
      setUploadStatus("success");
      setSuccessMessage(
        `Successfully imported ${file.name}. Processing ${file.name}...`,
      );

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setUploadStatus("error");
      setErrorMessage("Failed to upload file. Please try again.");
    } finally {
      clearInterval(interval);
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    setFile(null);
    setUploadProgress(0);
    setUploadStatus("idle");
    setSuccessMessage("");
    setErrorMessage("");
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Import Courses from Excel"
      size="md"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <Text fz={14} c="dimmed">
            Upload an Excel file to import multiple courses at once. The file
            should contain columns for: Code, Name, Description, Credit Hours,
            and Semester.
          </Text>

          <Box
            p="lg"
            style={{
              border: "2px dashed var(--mantine-color-gray-3)",
              borderRadius: "var(--mantine-radius-md)",
              backgroundColor: "var(--mantine-color-gray-0)",
            }}
          >
            <FileInput
              accept=".xlsx,.xls"
              label="Select Excel File"
              placeholder="Click to select or drag and drop"
              value={file}
              onChange={handleFileChange}
              clearable
              disabled={isProcessing}
              icon={<IconUpload size={14} />}
            />
          </Box>

          {file && (
            <Group justify="space-between" p="sm" bg="blue.0" rounded="md">
              <Group gap={8}>
                <Badge color="blue" variant="light">
                  {file.name.split(".").pop()?.toUpperCase()}
                </Badge>
                <Text fz={12} fw={500}>
                  {file.name}
                </Text>
              </Group>
              <Text fz={12} c="dimmed">
                {(file.size / 1024).toFixed(2)} KB
              </Text>
            </Group>
          )}

          {isProcessing && uploadProgress > 0 && (
            <Stack gap={4}>
              <Group justify="space-between">
                <Text fz={12} fw={500}>
                  Uploading...
                </Text>
                <Text fz={12} c="dimmed">
                  {Math.round(uploadProgress)}%
                </Text>
              </Group>
              <Progress value={uploadProgress} color="indigo" />
            </Stack>
          )}

          {uploadStatus === "success" && (
            <Alert
              icon={<IconCheck size={16} />}
              color="green"
              title="Upload Successful"
            >
              {successMessage}
            </Alert>
          )}

          {uploadStatus === "error" && (
            <Alert
              icon={<IconAlertCircle size={16} />}
              color="red"
              title="Upload Failed"
            >
              {errorMessage}
            </Alert>
          )}

          <Group justify="flex-end" mt="lg">
            <Button
              variant="default"
              onClick={handleClose}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color="indigo"
              loading={isProcessing}
              disabled={!file || isProcessing}
            >
              {isProcessing ? "Uploading..." : "Import Courses"}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
