export const Testimonial = (params: any) => {
  return (
    <div>
        <h3>{params.blok.comment}</h3>
        <p>{params.blok.name}</p>
    </div>
  );
};