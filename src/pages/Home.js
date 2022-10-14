import "../css/Home.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { useMediaQuery } from "@material-ui/core";
import { motion } from "framer-motion";

const Home = () => {
  SwiperCore.use([Autoplay]);

  const isDesktop = useMediaQuery("(max-width: 765px)");

  const [styleRevenant, setStyleRevenant] = useState({ display: "none" });
  const [styleEvermore, setStyleEvermore] = useState({ display: "none" });
  const [styleSlime, setStyleSlime] = useState({ display: "none" });
  const [styleMerchant, setStyleMerchant] = useState({ display: "none" });
  const [stylePeony, setStylePeony] = useState({ display: "none" });

  const productMotion = {
    rest: {
      filter: "drop-shadow(0px 0px 15px rgba(106,106,106,0))",
      transform: "translateY(0px)",
    },
    hover: {
      border: "1pt solid rgba(255,255,255,1)",
      filter: "drop-shadow(0px 0px 15px rgb(106,106,106))",
      transform: "translateY(-10px)",
    },
  };

  const imgMotion = {
    rest: {
      transform: "scale(1) translateX(0px)",
    },
    hover: {
      transform: "scale(1.05) translateX(5px)",
      transition: {
        type: "spring",
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  useEffect(() => {
    // console.log(isDesktop);
    if (!isDesktop) {
      setStyleRevenant((styleRevenant) => ({
        ...styleRevenant,
        display: "block",
      }));
      setStyleEvermore((styleEvermore) => ({
        ...styleEvermore,
        display: "block",
      }));
      setStyleSlime((styleSlime) => ({ ...styleSlime, display: "block" }));
    } else {
      setStyleRevenant((styleRevenant) => ({
        ...styleRevenant,
        display: "none",
      }));
      setStyleEvermore((styleEvermore) => ({
        ...styleEvermore,
        display: "none",
      }));
      setStyleSlime((styleSlime) => ({ ...styleSlime, display: "none" }));
    }
  }, [isDesktop]);

  return (
    <section style={{ minHeight: "100vh" }}>
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Swiper
          className="swiper"
          loop={true}
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <img width="640" height="427" src="images/home-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img width="640" height="427" src="images/home-2.png" alt="" />
          </SwiperSlide>
          <div className="slider-caption top">
            <p>
              <span>WE</span> <span className="green">DO</span>{" "}
              <span>WHAT WE</span> <span className="green">LOVE</span>{" "}
            </p>
            <p>
              Creating games for the love of games. We aim to create games that
              don’t just bring fun to the table, but a memorable experience for
              all to enjoy.
            </p>
          </div>
          <div className="slider-caption">
            <div className="curved"></div>
          </div>
        </Swiper>

        <div className="container-fluid">
          <div className="wrap-list-product">
            <div className="wrap-product-title">
              <span>Our Products</span>
              <div class="arrow bounce">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>

            <motion.div
              variants={productMotion}
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              animate="rest"
              id="adjust-top"
            >
              <div className="wrap-product-container">
                <motion.img
                  variants={imgMotion}
                  className="desktop-img"
                  src="images/revenant.png"
                  alt=""
                />
                <img
                  className="tablet-img"
                  src="images/revenant-tablet.png"
                  alt=""
                />

                <div
                  onMouseEnter={(e) => {
                    if (isDesktop) {
                      setStyleRevenant({ display: "block" });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isDesktop) {
                      setStyleRevenant({ display: "none" });
                    }
                  }}
                  className="pos-desc-product wrap-wallpaper-product-solid adjust-pos-left width-1"
                >
                  <div>
                    <h3>The Revenant Prince</h3>
                    <p style={styleRevenant}>
                      A tale of the man who wishes for his soul to be free. Kill
                      or show mercy, the choice is yours. Your actions lead to
                      certain consequences and outcomes that cannot be undone!
                    </p>

                    <div style={styleRevenant}>
                      <a
                        href="https://discord.gg/KAqv97W"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-products avail"
                      >
                        <i class="fa-brands fa-discord"></i>
                      </a>
                      <a
                        href="http://www.therevenantprince.com"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-products avail"
                      >
                        Go To Website
                      </a>
                      <a
                        href="https://bit.ly/trpsteam"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-products avail"
                      >
                        <span>Buy on Steam </span>
                        <i class="fa-brands fa-steam-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={productMotion}
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              animate="rest"
              id="adjust-top"
            >
              <div className="wrap-product-container">
                <motion.img
                  variants={imgMotion}
                  className="desktop-img"
                  src="images/evermore.png"
                  alt=""
                />
                <img
                  className="tablet-img"
                  src="images/evermore-tablet.png"
                  alt=""
                />

                <div
                  onMouseEnter={(e) => {
                    if (isDesktop) {
                      setStyleEvermore({ display: "block" });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isDesktop) {
                      setStyleEvermore({ display: "none" });
                    }
                  }}
                  className="pos-desc-product wrap-wallpaper-product-solid-right adjust-pos-right width-2"
                >
                  <div className="evermore-container">
                    <h3>Evermore Knights</h3>
                    <p style={styleEvermore}>
                      A quality 2D JRPG blockchain anime game. Assemble a party
                      of four and venture throughout the vast world of Temeris
                      as you fight through the enroaching darkness known as the
                      mist. Meet a cast of interesting characters as they help
                      you throughout your exciting journey.
                    </p>

                    <div style={styleEvermore}>
                      <a
                        href="https://discord.gg/k37yVgXDB7"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-products avail"
                      >
                        <i class="fa-brands fa-discord"></i>
                      </a>
                      <a
                        href="https://evermoreknights.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-products avail"
                      >
                        Go To Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={productMotion}
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              animate="rest"
              id="adjust-top"
            >
              <div className="wrap-product-container">
                <motion.img
                  variants={imgMotion}
                  className="desktop-img"
                  src="images/slime.png"
                  alt=""
                />
                <img
                  className="tablet-img"
                  src="images/slime-tablet.png"
                  alt=""
                />

                <div
                  onMouseEnter={(e) => {
                    if (isDesktop) {
                      setStyleSlime({ display: "block" });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isDesktop) {
                      setStyleSlime({ display: "none" });
                    }
                  }}
                  className="pos-desc-product wrap-wallpaper-product-transparent adjust-pos-left width-2"
                >
                  <div>
                    <h3>Slime Haven</h3>
                    <p style={styleSlime}>
                      A lovely pet raising simulator made for everyone! Raise
                      and breed your very own slimes for the whole world to see.
                      Slimes come in all shapes and sizes and have their own
                      special and unique traits. You can even trade or sell your
                      slimes to other people whenever you like!
                    </p>

                    <div style={styleSlime}>
                      <button className="btn-products develop">
                        Under Development
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="wrap-peony-merchant-container">
              <motion.div
                variants={productMotion}
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                animate="rest"
                id="adjust-top"
              >
                <div className="wrap-product-container">
                  <motion.img
                    variants={imgMotion}
                    src="images/merchant.png"
                    alt=""
                  />

                  <div
                    onMouseEnter={(e) => {
                      setStyleMerchant({ display: "block" });
                    }}
                    onMouseLeave={(e) => {
                      setStyleMerchant({ display: "none" });
                    }}
                    className="pos-desc-product wrap-wallpaper-product-transparent adjust-pos-bottom"
                  >
                    <div className="merchant-container">
                      <h3>Merchant Marvels</h3>
                      <p style={styleMerchant}>
                        Establish your own mercantile empire as you idly craft
                        your way up to the top! Produce powerful wares unlike
                        the world as ever seen! Gather valuable ores, materials,
                        and use them to also forge exclusive highly prized
                        items.
                      </p>
                      <div style={styleMerchant}>
                        <button className="btn-products develop">
                          Under Development
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={productMotion}
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                animate="rest"
                id="adjust-top"
              >
                <div className="wrap-product-container ">
                  <motion.img
                    variants={imgMotion}
                    src="images/peony.png"
                    alt=""
                  />

                  <div
                    onMouseEnter={(e) => {
                      setStylePeony({ display: "block" });
                    }}
                    onMouseLeave={(e) => {
                      setStylePeony({ display: "none" });
                    }}
                    className="pos-desc-product wrap-wallpaper-product-transparent adjust-pos-bottom"
                  >
                    <div className="merchant-container">
                      <h3>Peony Ranch</h3>
                      <p style={stylePeony}>
                        Enter the ever abundant Peony Fields where you can setup
                        your ranch alongside your very own Peony Buddies! Use
                        your bought land to setup shop as you gather crops,
                        minerals and more. You can even turn your daily earnings
                        and resources for special and valuable rewards!
                      </p>
                      <div style={stylePeony}>
                        <button className="btn-products develop">
                          Under Development
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="wrap-in-partnership">
            <h3>INCORPORATED WITH</h3>

            <div>
              <img src="images/muse.png" alt="" />
              <img src="images/creo.png" alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
