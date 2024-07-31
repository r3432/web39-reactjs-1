import { productHome } from "../../../untils/mockup";
import ProductCard from "../common/ProductCard";

const Section = () => {
  const data = productHome;

  // console.log(data);

  // Check san pham co ton tai hay khong
  if (data.length == 0) return <p>Khong ton tai san pham!</p>;
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((product) => {
            // console.log(product);
            return (
              <div key={product.id} className="col mb-5">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;
