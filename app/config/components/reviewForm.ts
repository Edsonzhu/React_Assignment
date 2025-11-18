export const reviewFormCss = {
  form: {
    wrapper: "flex max-w-md flex-col gap-4",
  },
  inputField: {
    inputClass: "block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300",
    errorInputClass: "block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300",
    errorTextClass: "mt-1 text-xs text-red-400",
    labelClass: "block text-sm text-gray-500 dark:text-gray-300",
  },
  textareaField: {
    labelClass: "block text-sm text-gray-500 dark:text-gray-300",
    textAreaClass: "block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300",
    errorInputClass: "block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300",
    errorTextClass: "mt-1 text-xs text-red-400",
  },
  select: {
    labelClass: "block text-sm text-gray-500 dark:text-gray-300",
    selectClass: "mt-0.5 w-full rounded border-gray-300 shadow-sm text-gray-700 px-3 py-2.5 dark:text-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900",
  },
  starRating: {
    labelClass: "block text-sm text-gray-500 dark:text-gray-300",
    starWrapper: "flex items-center space-x-1 pt-1",
    iconClass: "cursor-pointer",
    errorTextClass: "mt-1 text-xs text-red-400",
  },
  button: {
    class: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5",
  }
};

export const reviewFormText = {
  createButtonLabel: "Create Review",
  updateButtonLabel: "Update Review",
};