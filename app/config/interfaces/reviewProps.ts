import { reviewFormAllowedComponents } from "@/constants/reviewForm";

// Review Properties Interface and Configuration
export interface ReviewProps
{
  title: string,
  description: string,
  comments?: string,
  reviewRating?: number,
  status?: string,
  dateCreated?: string,
  dateUpdated?: string
}

// Review Form Fields Configuration
// Note: The following configuration must align with the ReviewProps interface
export const reviewFormFields = [
  { name: "title", label: "Title", type: "text", component: reviewFormAllowedComponents.InputField, validation: "[!-~]", errorMessage: "Title is required." },
  { name: "description", label: "Description", type: "text", component: reviewFormAllowedComponents.InputField, validation: "[!-~]", errorMessage: "Description is required." },
  { name: "comment", label: "Comment", type: "text", component: reviewFormAllowedComponents.TextareaField },
  { name: "reviewRating", label: "Rating", component: reviewFormAllowedComponents.StarRating, totalStars: 5},
  { name: "status", label: "Status", component: reviewFormAllowedComponents.Select, options: [
    { name: "New", value: "new", requirement: [] },
    { name: "Ongoing", value: "ongoing", requirement: [] },
    { name: "On-hold", value: "on-hold", requirement: [] },
    { name: "Canceled", value: "canceled", requirement: [] },
    { name: "Done", value: "done", requirement: [
      { field: "reviewRating", validation: "[1-9]+", errorMessage: "Review is required." },
      { field: "comment", validation: "[!-~]", errorMessage: "Comment is required." }
    ] }
  ]},
]

// Review Card Fields Configuration
// Note: The following configuration must align with the ReviewProps interface
export const reviewCardFields = [
  { name: "title", label: "Title" },
  { name: "status", label: "Status" },
  { name: "reviewRating", label: "Rating" },
  { name: "dateCreated", label: "Date Created" },
  { name: "dateUpdated", label: "Date Updated" },
]