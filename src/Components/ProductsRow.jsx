import React from "react";
import styles from "./ProductsRow.module.css";
import ProductCard from "./UI/ProductCard";

const ProductRow = () => {
  return (
    <div className={styles.productsRow}>
      <div className={styles.row}>
        <ProductCard
          id="1"
          name="Smart Watch with Bluetooth Calling, 240 * 280 Pixel High Resolution"
          price="99"
          cents="99"
          rating={5}
          image="https://ongpng.com/wp-content/uploads/2023/03/4.Fire-Boltt-Ninja_1500x1500.png"
        />
        <ProductCard
          id="2"
          name="Wireless Over Ear ANC Headphones with Mic, Upto 70 Hrs Playtime)"
          price="59"
          cents="95"
          rating={3}
          image="https://static.vecteezy.com/system/resources/previews/012/981/082/original/wireless-headphones-side-view-white-icon-on-a-transparent-background-3d-rendering-png.png"
        />
      </div>

      <div className={styles.row}>
        <ProductCard
          id="3"
          name="Coffee Maker, 600 Watt, 4 Cups Drip Coffee Maker(Black)"
          price="129"
          cents="99"
          rating={4}
          image="https://pics.clipartpng.com/Coffee_Maker_PNG_Clipart-633.png"
        />
        <ProductCard
          id="4"
          name="Packaged Drinking Water 1 Liter | Pack Of 12 Bottles"
          price="10"
          cents="99"
          rating={4}
          image="https://pngimg.com/d/water_bottle_PNG98959.png"
        />
        <ProductCard
          id="5"
          name="28 Ltrs Large Laptop Backpack with Bottle Pocket"
          price="49"
          cents="99"
          rating={5}
          image="https://www.pngmart.com/files/22/Laptop-Bag-PNG-File.png"
        />
      </div>

      <div className={styles.row}>
        <ProductCard
          id="6"
          name="Home Security Camera | QHD Camera, SD Card (Upto 256 GB)"
          price="120"
          rating={5}
          image="https://i.pinimg.com/originals/84/08/92/84089295f8857c406ae6053edcf43296.png"
        />
        <ProductCard
          id="7"
          name="Gaming Mouse with Programmable Buttons & RGB Lighting"
          price="56"
          cents="99"
          rating={3}
          image="https://media.croma.com/image/upload/v1681412995/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/225662_0_dyzgte.png"
        />
        <ProductCard
          id="8"
          name="Gaming Monitor 27-Inch Fhd LCD Display Gaming Monitor"
          price="450"
          cents="99"
          rating={4}
          image="https://ongpng.com/wp-content/uploads/2023/03/31.SAMSUNG-_Odyssey_gaiming_monitor_1573x1632.png"
        />
      </div>
    </div>
  );
};

export default ProductRow;
