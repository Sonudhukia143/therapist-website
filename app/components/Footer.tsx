export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-10 text-center text-sm">
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        <p>
          &copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.
        </p>
        <p>
          1287 Maplewood Drive, Los Angeles, CA · (323) 555-0192 ·{" "}
          <a href="mailto:serena@blakepsychology.com" className="text-blue-600 dark:text-blue-400 hover:underline">
            serena@blakepsychology.com
          </a>
        </p>
        <p>
          Site by <span className="font-medium text-blue-600 dark:text-blue-400">Grow My Therapy</span>
        </p>

      </div>
    </footer>
  );
}
