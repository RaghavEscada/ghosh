"use client";
import Image from "next/image";

import styles from "./page.module.css";

import parallaximage from "./parallaximage";

export default function Home() {

  return (


      <div className="app">


        <div className={styles.container}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.img}>
              <parallaximage
                src="/portraits/cover.jpg"
                alt="Cover Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Text Overlay */}
            <div className={styles.textOverlay}>
              <h1>
                Surya Ghosh <sup>(The Creator)</sup>
              </h1>
              <p>Scroll Down</p>
            </div>
          </section>

          {/* Image Gallery Section */}
          <section className={styles.imageGallery}>
            <div className={styles.column}>
              <parallaximage
                src="/portraits/1.jpg"
                alt="Image 1"
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
              />
              <parallaximage
                src="/portraits/4.jpg"
                alt="Image 4"
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
              />
              <parallaximage
                src="/portraits/6.jpg"
                alt="Image 6"
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.column}>
              <parallaximage
                src="/portraits/2.jpg"
                alt="Image 2"
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
              />
              <parallaximage
                src="/portraits/5.jpg"
                alt="Image 5"
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
              />
              <div className={styles.button}>
                <button>Drive Link</button>
              </div>
            </div>
          </section>
        </div>


      </div>



  );
}
