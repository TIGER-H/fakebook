import { ArrowRightAlt, LinkedIn, Twitter, YouTube } from "@material-ui/icons";
import "./testimonial.scss";

export const Testmonial = () => {
  const datas = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "twitter",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "youtube",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "linkedin",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {datas.map((data) => (
          <div
            className={data.featured ? "card featured" : "card"}
            key={data.id}
          >
            <div className="top">
              <div className="left">
                <ArrowRightAlt />
              </div>
              <img className="user" src={data.img} alt="gif" />
              <div className="right">
                {data.icon === "youtube" && <YouTube />}
                {data.icon === "twitter" && <Twitter />}
                {data.icon === "linkedin" && <LinkedIn />}
              </div>
            </div>
            <div className="center">{data.desc}</div>
            <div className="bottom">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
