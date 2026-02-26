"use client";
import Article from "@/components/ui/Article/Article";
import {Images} from "@/assets/images/pricing";
import Toggle from "@/components/ui/Toggle/Toggle";
import styles from "./page.module.scss";
import {useState} from "react";
import clsx from "clsx";
import PlanCard from "@/components/ui/PlanCard/PlanCard";
import pricing from "@/data/pricing.json";
import {Icons} from "@/components/ui/Icons";

type BillingPeriod = "monthly" | "yearly";
interface PlanFeatures {
  "unlimited-story-posting": boolean;
  "unlimited-photo-upload": boolean;
  "embedding-custom-content": boolean;
  "customize-metadata": boolean;
  "advanced-metrics": boolean;
  "photo-downloads": boolean;
  "search-engine-indexing": boolean;
  "custom-analytics": boolean;
}

interface Pricing {
  title: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  featured: boolean;
  planFeatures: PlanFeatures;
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  function onToggle() {
    setBillingPeriod((prev) => {
      return prev === "yearly" ? "monthly" : "yearly";
    });
  }

  const featureKeys = Object.keys(pricing[0].planFeatures) as Array<
    keyof PlanFeatures
  >;
  const featureCards = featureKeys.map((feature) => {
    return (
      <span key={feature}>
        <div role="row" className={styles.compare__row}>
          <h5 className={styles.compare__feature} role="rowheader">
            {feature.replaceAll("-", " ").toUpperCase()}
          </h5>

          {pricing.map((plan, index) => {
            return (
              <div key={index} className={styles.compare__data}>
                <span className={styles.compare__plansSm} aria-hidden>
                  {plan.title}
                </span>
                <p>
                  {plan.planFeatures[feature] ? (
                    <>
                      <span className="visually-hidden">included</span>
                      <Icons.Check />
                    </>
                  ) : (
                    <span className="visually-hidden">not included</span>
                  )}
                </p>
              </div>
            );
          })}
        </div>
        <hr className={styles.compare__divider} />
      </span>
    );
  });
  return (
    <>
      <Article
        hero
        image={Images.hero.map((img) => {
          return {
            size: img.size,
            src: img.src,
            fill: false,
            alt: "",
            position: "Right",
            loading: "eager",
            width: img.width,
            height: img.height,
          };
        })}
      >
        <>
          <h2>pricing</h2>
          <p>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </>
      </Article>
      <section className={styles.plans}>
        <div className={styles.plans__toggle}>
          <span
            className={clsx(
              billingPeriod === "monthly" && styles.toggle__textActive,
            )}
            aria-hidden
          >
            monthly
          </span>
          <Toggle
            onToggle={onToggle}
            label={`billing period, currently ${billingPeriod}`}
            checked={billingPeriod === "yearly"}
          />
          <span
            className={clsx(
              billingPeriod === "yearly" && styles.toggle__textActive,
            )}
            aria-hidden
          >
            yearly
          </span>
        </div>
        <div className={styles.pricing__plans}>
          {pricing.map((plan) => {
            return (
              <PlanCard
                key={plan.title}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                billingPeriod={billingPeriod}
                featureCard={plan.featured}
              />
            );
          })}
        </div>
      </section>
      <section role="table" className={styles.compare}>
        <h2 className={styles.compare__title}>compare</h2>
        <div className={styles.compare__header} role="rowgroup">
          <span>the features</span>
          {pricing.map((plan) => (
            <span
              key={plan.title}
              className={styles.compare__plansLg}
              role="columnheader"
            >
              {plan.title}
            </span>
          ))}
        </div>
        <hr className={styles.compare__headerDivider} />

        <div role="rowgroup">{featureCards}</div>
      </section>
    </>
  );
}
