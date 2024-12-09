const CTA: React.FC = () => {
  return (
    <section className="flex flex-col justify-center px-[15vw] py-[8em] gap-8 bg-[#fdf1ea]">
      <span className="flex flex-col gap-4 bg-transparent max-w-[80vw]">
        <h3 className="show font-medium font-aleo">Want to get involved?</h3>
        <p className="show">
          Are you passionate about giving back to the community and making a
          positive impact? Join our dedicated team of volunteers to turn more
          ideas into reality! Whether you’re a creative, organizer, or a
          charmer, we have a variety of opportunities.
        </p>
      </span>
      <button className="show btn">Join Now</button>
    </section>
  );
};
export default CTA;
