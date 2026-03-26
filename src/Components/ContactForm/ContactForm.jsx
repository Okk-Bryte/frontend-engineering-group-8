function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation logic here
    const res = await fetch("FORM_ENDPOINT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSubmitted(true);
  };

  return submitted ? <p>Form submitted successfully!</p> : (
    <form onSubmit={handleSubmit}>
      {/* inputs here */}
    </form>
  );
}
