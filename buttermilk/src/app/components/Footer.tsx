export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-20 items-center justify-center bg-blue-500 px-2 md:px-10 py-20">
      <div className="flex gap-4">
        <div>Logo</div>
        <div>
          <p>12345678</p>
          <p>Call our Support line.</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div>Logo</div>
        <div>
          <p>12345678</p>
          <p>Call our Support line.</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div>Logo</div>
        <div>
          <p>12345678</p>
          <p>Call our Support line.</p>
        </div>
      </div>

      <div>
        <button className="px-5 py-3 bg-white text-blue-500 hover:scale-105 hover:shadow-lg rounded-3xl">
          Shop Now
        </button>
      </div>
    </footer>
  );
}
