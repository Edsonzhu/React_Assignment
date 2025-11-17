import { reviewFormAllowedComponents } from "@/constants/reviewForm";

// Review Properties Interface and Configuration
export interface ReviewProps
{
  id: string,
  title: string,
  description: string,
  comments?: string,
  reviewRating?: number,
  status?: string,
  dateCreated?: string,
  dateUpdated?: string
}

export const reviewStatusOptions = [
  { name: "New", value: "New", requirement: [] },
  { name: "Ongoing", value: "Ongoing", requirement: [] },
  { name: "On-hold", value: "On-hold", requirement: [] },
  { name: "Canceled", value: "Canceled", requirement: [] },
  { name: "Done", value: "Done", requirement: [
    { field: "reviewRating", validation: "[1-9]+", errorMessage: "Review is required." },
    { field: "comment", validation: "[!-~]", errorMessage: "Comment is required." }
  ] }
];

// Review Form Fields Configuration
// Note: The following configuration must align with the ReviewProps interface
// TODO: need to document the field that each component have like Select have options etc
export const reviewFormFields = [
  { name: "title", label: "Title", type: "text", component: reviewFormAllowedComponents.InputField, validation: "[!-~]", errorMessage: "Title is required." },
  { name: "description", label: "Description", type: "text", component: reviewFormAllowedComponents.InputField, validation: "[!-~]", errorMessage: "Description is required." },
  { name: "comment", label: "Comment", type: "text", component: reviewFormAllowedComponents.TextareaField },
  { name: "reviewRating", label: "Rating", component: reviewFormAllowedComponents.StarRating, totalStars: 5},
  { name: "status", label: "Status", component: reviewFormAllowedComponents.Select, options: reviewStatusOptions },
]

// Review Card Fields Configuration
// Note: The following configuration must align with the ReviewProps interface
export const reviewTableFields = [
  { name: "title", label: "Title" },
  { name: "status", label: "Status", filterBy: reviewStatusOptions },
  { name: "reviewRating", label: "Rating", component: reviewFormAllowedComponents.StarRating, filterBy: [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ] },
  { name: "dateCreated", label: "Date Created" },
  { name: "dateUpdated", label: "Date Updated" },
]