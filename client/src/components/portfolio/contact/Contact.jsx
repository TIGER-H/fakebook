import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="http://starship-ent.com/img/board_top_image/wjsn.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
