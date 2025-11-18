import React, { useState } from "react";

// constants
import { reviewFormAllowedComponents } from "@/constants/reviewForm";

// config
import { reviewFormFields, type ReviewProps } from "@/config/interfaces/reviewProps";
import { reviewFormCss, reviewFormText } from "@/config/components/reviewForm";

// components
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import Select from "@/components/Select";
import StarRating from "@/components/StarRating";
import Button, { ButtonTypes } from "@/components/Button";

// utils
import { checkRegex, generateId } from "@/utils";

interface ReviewFormProps {
  review?: ReviewProps;
  onSubmit: (review: ReviewProps) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ review, onSubmit }) => {
  const [reviewObj, setReviewObj] = useState<ReviewProps>(review ? review : {} as ReviewProps);
  const [errorObj, setErrorObj] = useState<{ [key: string]: string }>({});
  const isCreateMode = Object.keys(reviewObj).length === 0;

  const handleInputChange = (fieldName: string, value: string | number) => {
    setReviewObj((prevReview) => ({
      ...prevReview,
      [fieldName]: value,
    }));
  };

  const getFieldValue = (fieldName: keyof ReviewProps): string | number | undefined => {
    return reviewObj[fieldName];
  }

  const isFormValid = (): boolean => {
    const err = {} as { [key: string]: string };

    reviewFormFields.forEach((field) => {
      if (field.validation && field.errorMessage && field.component !== reviewFormAllowedComponents.Select)
      {
        const fieldName: string = field.name;
        if (!(fieldName in reviewObj))
        {
          err[fieldName] = field.errorMessage;
          return;
        }

        const fieldValue = getFieldValue(fieldName as keyof ReviewProps);
        if (!checkRegex(fieldValue, field.validation))
        {
          err[fieldName] = field.errorMessage;
        }
      }
      else if (field.component === reviewFormAllowedComponents.Select)
      {
        const selectOptions = field.options || [];
        selectOptions.forEach(({ value, requirement = [] }) => {
          if (value === reviewObj[field.name as keyof ReviewProps])
          {
            requirement.forEach(({ field, validation, errorMessage }) => {
              if (validation && errorMessage)
              {
                const fieldValue = getFieldValue(field as keyof ReviewProps);
                if (!checkRegex(fieldValue, validation))
                {
                  err[field] = errorMessage;
                }
              }
            });
          }
        });
      }
    });

    setErrorObj(err);
    return Object.keys(err).length === 0;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid()) 
    {
      onSubmit({
        ...reviewObj,
        id: reviewObj.id || generateId(),
        dateCreated: reviewObj.dateCreated || new Date().toLocaleString(),
        dateUpdated: new Date().toLocaleString()
      });
    }
  };

  return (
    <form className={reviewFormCss.form.wrapper} onSubmit={handleSubmit} >
      {reviewFormFields.map((field, index) => {
        switch (field.component) {
          case reviewFormAllowedComponents.InputField:
            return (
              <InputField id={field.label}
                label={field.label}
                inputClass={reviewFormCss.inputField.inputClass}
                errorMessage={errorObj[field.name] || ""}
                errorInputClass={reviewFormCss.inputField.errorInputClass}
                errorTextClass={reviewFormCss.inputField.errorTextClass}
                labelClass={reviewFormCss.inputField.labelClass}
                inputType={field.type}
                onChange={(value: string) => handleInputChange(field.name, value)}
                value={reviewObj[field.name as keyof ReviewProps] as string}
                key={index}
                />
            );
          case reviewFormAllowedComponents.TextareaField:
            return (
              <TextareaField label={field.label}
                errorMessage={errorObj[field.name] || ""}
                labelClassName={reviewFormCss.textareaField.labelClass}
                textAreaClassName={reviewFormCss.textareaField.textAreaClass}
                errorTextClass={reviewFormCss.textareaField.errorTextClass}
                onChange={(value: string) => handleInputChange(field.name, value)}
                value={reviewObj[field.name as keyof ReviewProps] as string}
                key={index}
                />
            );
          case reviewFormAllowedComponents.Select:
            return (
              <Select
                label={field.label}
                options={field.options || []}
                onChange={(value: string) => handleInputChange(field.name, value)}
                labelClassName={reviewFormCss.select.labelClass}
                selectClassName={reviewFormCss.select.selectClass}
                defaultValue={reviewObj[field.name as keyof ReviewProps] as string}
                key={index}
                />
            );
          case reviewFormAllowedComponents.StarRating:
            return (
              <StarRating
                label={field.label}
                value={reviewObj[field.name as keyof ReviewProps] as number}
                totalStars={field.totalStars}
                onChange={(value: number) => handleInputChange(field.name, value)}
                labelClass={reviewFormCss.starRating.labelClass}
                iconClassName={reviewFormCss.starRating.iconClass}
                starWrapperclassName={reviewFormCss.starRating.starWrapper}
                errorTextClass={reviewFormCss.starRating.errorTextClass}
                errorMessage={errorObj[field.name] || ""}
                key={index}
                />
            );
          default:
            throw new Error(`Unknown component type: ${field.component}`);
        }
      })}
      <Button
        type={ButtonTypes.SUBMIT}
        label={isCreateMode ? reviewFormText.createButtonLabel : reviewFormText.updateButtonLabel}
        className={reviewFormCss.button.class}
      />
    </form>
  );
}

export default ReviewForm;