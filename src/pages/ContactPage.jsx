export default function ContactPage() {
    return (
      <form className="contacts">
      <h2 id="Contact_Info">Contact Info</h2>
      <label for="name">Name:</label>
      <input type="text" id="name"></input>
      <label for="email">Email Address:</label>
      <input type="text" id="email"></input>
      <label for="message">Message:</label>
      <textarea type="text" id="message"></textarea>
      <button if="submit" type="submit">Submit</button>
    </form>
    );
  }
  