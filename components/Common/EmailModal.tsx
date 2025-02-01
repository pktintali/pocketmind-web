interface EmailModalProps {
  visibility: boolean;
  handleClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ visibility, handleClose }) => {
  if (!visibility) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
            Enter your email address
          </h2>
          <form action="https://formbold.com/s/obGDk" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="mb-4 w-full rounded border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleClose}
                className="rounded bg-gray-200 px-4 py-2 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-white dark:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailModal;
