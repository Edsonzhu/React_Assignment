export const reviewFormCss = {
  form: {
    wrapper: "max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md",
  },
  inputField: {
    inputClass: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
    errorInputClass: "w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
    errorTextClass: "mt-1 text-sm text-red-600",
    labelClass: "block mb-1 font-medium text-gray-700",
  },
  textareaField: {
    labelClass: "block text-sm text-gray-500 dark:text-gray-300",
    textAreaClass: "block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300",
    errorInputClass: "block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300",
    errorTextClass: "mt-2 text-sm text-red-600",
  },
  select: {
    labelClass: "block mb-1 font-medium text-gray-700",
    selectClass: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
  },
  starRating: {
    labelClass: "block mb-1 font-medium text-gray-700",
    starWrapper: "flex items-center space-x-1",
    iconClass: "cursor-pointer",
    errorTextClass: "mt-2 text-sm text-red-600",
  },
};

export const reviewFormText = {
  createButtonLabel: "Create Review",
  updateButtonLabel: "Update Review",
};