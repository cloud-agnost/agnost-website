import clsx from "clsx"
import React, { useEffect } from "react"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Form from "../components/Form/Form"
import caCss from "../css/card.module.css"
import feCss from "../css/feature.module.css"
import ilCss from "../css/illustration.module.css"
import shCss from "../css/showcase.module.css"
import juCss from "../css/jumbotron.module.css"
import seCss from "../css/section.module.css"
import ouCss from "../css/outcome.module.css"
import ImageSwitcher from "../theme/ImageSwitcher"
import { Terminal } from "../components/Terminal"

const Hero = () => {
  /* const words = ["Kubernetes", "Javascript"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Adjust the duration between word changes (in milliseconds) as desired

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setCurrentWord(words[currentWordIndex])
  }, [currentWordIndex])

  const controls = useInView({ triggerOnce: true }) */

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className={clsx(seCss.section)}>
        <div
          className={clsx(seCss["section--inner"], seCss["section--center"])}
        >
          <div className={caCss.card}>
            <div className={caCss.card__side}>
              <motion.h1
                className={caCss["card__title--important"]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                Open-source{" "}
                {/*  <AnimatePresence exitBeforeEnter>
                  <motion.span
                    key={currentWord.charCodeAt(0)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    exit={{ opacity: 0 }}
                  >
                    {currentWord}
                  </motion.span>
                </AnimatePresence>{" "} */}
                Kubernetes Development Platform
              </motion.h1>
              <motion.p
                className={caCss.card__content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Powerful and Scalable Application Development Platform running
                in Kubernetes Clusters. Efficiently build robust Node.js Express
                applications.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Form />
              </motion.div>
            </div>

            <div
              className={clsx(
                caCss.card__side,
                caCss["card__side--illustration"],
              )}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                src="../img/pages/index/hero.webm"
                poster="../img/pages/index/hero.gif"
                width="100%"
                height="100%"
              >
                <source src="/hero.webm" type="video/webm" />
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                <track
                  kind="captions"
                  src="../img/pages/index/hero.vtt"
                  label="English Captions"
                  srcLang="en"
                ></track>
              </video>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const AllInOneBackend = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
  })

  function getThreshold() {
    if (typeof window === "undefined") return 0.2
    return window.innerWidth < 768 ? 0.1 : 0.2
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  const fadeInFromRightVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const fadeInFromLeftVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section className={clsx(seCss.section)}>
      <div
        className={clsx(seCss["section--inner"], seCss["section--center"])}
        ref={ref}
      >
        <div className={juCss.jumbotron}>
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__title,
              seCss["section__title--jumbotron"],
              seCss["section__title--accent"],
              "text--center",
            )}
          >
            All-in-one Backend Development
          </motion.h1>

          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--jumbotron"],
              seCss["section__subtitle--narrow"],
              "text--center",
            )}
            style={{
              marginTop: "1rem",
            }}
          >
            Application server, database, authentication, queues, cache,
            cronjobs, realtime — it's all here. Agnost gives developers the
            technologies to build scalable & secure backend apps in minutes.
          </motion.p>
        </div>

        <div
          className={clsx(
            seCss.section__footer,
            seCss["section__footer--feature-tabs"],
          )}
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInFromLeftVariants}
            className={feCss.topfeatures}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-current"
            >
              <path
                fill="currentColor"
                d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z"
              />
            </svg>
            <h3 className={feCss.help__header}>Database</h3>
            <p className={feCss.feature__content}>
              MSSQL, Oracle, MongoDB, MySQL, or PostgreSQL.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInFromLeftVariants}
            className={feCss.topfeatures}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-current"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M9 3a1 1 0 0 1 .608.206l.1.087L12.414 6H19a3 3 0 0 1 2.995 2.824L22 9v8a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V6a3 3 0 0 1 2.824-2.995L5 3h4z"
                />
              </g>
            </svg>
            <h3 className={feCss.help__header}>Storage</h3>
            <p className={feCss.feature__content}>
              AWS S3, GCP Cloud Storage, Azure Blob Storage, and MinIO.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInFromRightVariants}
            className={feCss.topfeatures}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-current"
            >
              <path
                fill="currentColor"
                d="M19.99 4c0-1.1-.89-2-1.99-2h-7.17c-.53 0-1.04.21-1.42.59L4.59 7.41C4.21 7.79 4 8.3 4 8.83V20c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM8 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-8-4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm4 4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm0-6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"
              />
            </svg>
            <h3 className={feCss.help__header}>Cache</h3>
            <p className={feCss.feature__content}>
              Support for Redis speed data access.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInFromRightVariants}
            className={feCss.topfeatures}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-current"
            >
              <g fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </g>
            </svg>
            <h3 className={feCss.help__header}>Message Queue</h3>
            <p className={feCss.feature__content}>RabbitMQ and Kafka.</p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInFromLeftVariants}
            className={feCss.topfeatures}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 32 32"
              className="h-12 w-12 fill-current"
            >
              <circle cx="21" cy="26" r="2" fill="currentColor" />
              <circle cx="21" cy="6" r="2" fill="currentColor" />
              <circle cx="4" cy="16" r="2" fill="currentColor" />
              <path
                fill="currentColor"
                d="M28 12a3.996 3.996 0 0 0-3.858 3h-4.284a3.966 3.966 0 0 0-5.491-2.643l-3.177-3.97A3.963 3.963 0 0 0 12 6a4 4 0 1 0-4 4a3.96 3.96 0 0 0 1.634-.357l3.176 3.97a3.924 3.924 0 0 0 0 4.774l-3.176 3.97A3.96 3.96 0 0 0 8 22a4 4 0 1 0 4 4a3.962 3.962 0 0 0-.81-2.387l3.176-3.97A3.966 3.966 0 0 0 19.858 17h4.284A3.993 3.993 0 1 0 28 12ZM6 6a2 2 0 1 1 2 2a2.002 2.002 0 0 1-2-2Zm2 22a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm8-10a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm12 0a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Z"
              />
            </svg>
            <h3 className={feCss.help__header}>Realtime</h3>
            <p className={feCss.feature__content}>
              Support for WebSockets and Server-Sent Events.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInFromLeftVariants}
            className={feCss.topfeatures}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 640 512"
              className="h-12 w-12 fill-current"
            >
              <path
                fill="currentColor"
                d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"
              />
            </svg>
            <h3 className={feCss.help__header}>Authentication</h3>
            <p className={feCss.feature__content}>
              Single-sign On, LDAP and Active Directory, and Social Login
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInFromRightVariants}
            className={feCss.topfeatures}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 36 36"
              className="h-12 w-12 fill-current"
            >
              <path
                fill="currentColor"
                d="M31.47 3.84a5.78 5.78 0 0 0-7.37-.63a16.08 16.08 0 0 1 8.2 7.65a5.73 5.73 0 0 0-.83-7.02Z"
                className="clr-i-solid clr-i-solid-path-1"
              />
              <path
                fill="currentColor"
                d="M11.42 3.43a5.77 5.77 0 0 0-7.64.41a5.72 5.72 0 0 0-.38 7.64a16.08 16.08 0 0 1 8.02-8.05Z"
                className="clr-i-solid clr-i-solid-path-2"
              />
              <path
                fill="currentColor"
                d="M18 4a14 14 0 0 0-9.89 23.88l-2.55 2.55A1 1 0 1 0 7 31.84l2.66-2.66a13.9 13.9 0 0 0 16.88-.08l2.74 2.74a1 1 0 0 0 1.41-1.41L28 27.78A14 14 0 0 0 18 4Zm7.47 17.43a1 1 0 0 1-1.33.47L17 18.44V9.69a1 1 0 0 1 2 0v7.5l6 2.91a1 1 0 0 1 .49 1.33Z"
                className="clr-i-solid clr-i-solid-path-3"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
            <h3 className={feCss.help__header}>Cronjobs</h3>
            <p className={feCss.feature__content}>
              Scheduled jobs that run at specific times or intervals.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInFromRightVariants}
            className={feCss.topfeatures}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-current"
            >
              <path
                fill="currentColor"
                d="M18.618 7.462L6.403 2.085a1.007 1.007 0 0 0-.77-.016a1.002 1.002 0 0 0-.552.537l-3 7a1 1 0 0 0 .525 1.313L9.563 13.9L8.323 17H4v-3H2v8h2v-3h4.323c.823 0 1.552-.494 1.856-1.258l1.222-3.054l3.419 1.465a1 1 0 0 0 1.311-.518l3-6.857a1 1 0 0 0-.513-1.316zm1.312 8.91l-1.858-.742l1.998-5l1.858.741z"
              />
            </svg>
            <h3 className={feCss.help__header}>Security</h3>
            <p className={feCss.feature__content}>
              API keys, Rate limiters, Domain/IP white-listing.
            </p>
          </motion.div>
        </div>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInFromLeftVariants}
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--narrow"],
            "text--center",
          )}
          style={{ marginTop: "1rem" }}
        >
          Agnost also includes a low-code endpoint designer that allows you to
          create and deploy your APIs. You can create and manage your own custom
          express routes and middlewares.
        </motion.p>
      </div>
    </section>
  )
}

const Serverless = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className={(clsx(seCss.section), seCss["section--odd"])}>
      <div className={clsx(seCss["section--help"], seCss["section--center"])}>
        <motion.div ref={ref} className={juCss.jumbotron}>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__title,
              caCss["card__title--important"],
              seCss["section__title--jumbotron"],
              seCss["section__title--accent"],
              "text--center",
            )}
          >
            Revolutionize app deployment with Customizable Serverless Functions
          </motion.h1>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(seCss["section--img"])}
          >
            <ImageSwitcher
              lightImageSrc="/img/pages/knative4.png?text=Read replicas and Primary"
              darkImageSrc="/img/pages/knative4.png?text=Read replicas and Primary"
              className={ilCss.illustration__hero}
              width={1114}
              height={431}
              alt="Read replicas and Primary"
              loading="eager"
            />
          </motion.div>

          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--jumbotron"],
              seCss["section__subtitle--accent"],
              seCss["section__subtitle--narrow"],
              "text--center",
            )}
            style={{ marginTop: "1rem" }}
          >
            Agnost deploys your application server(Aka API Server) as fully
            customizable KNative serverless functions, enabling auto-scaling to
            meet increased demand but also effectively conserving capacity by
            scaling down to zero pods.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

const Realtime = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className={clsx(seCss.section)}>
      <div className={clsx(seCss["section--help"], seCss["section--center"])}>
        <motion.div ref={ref} className={juCss.jumbotron}>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__title,
              caCss["card__title--important"],
              seCss["section__title--jumbotron"],
              seCss["section__title--accent"],
              "text--center",
            )}
          >
            Realtime Application Development
          </motion.h1>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(seCss["section--img"])}
          >
            <ImageSwitcher
              lightImageSrc="/img/pages/codepush.png?text=Read replicas and Primary"
              darkImageSrc="/img/pages/codepush.png?text=Read replicas and Primary"
              className={ilCss.illustration__hero}
              width={650}
              height={280}
              alt="Read replicas and Primary"
              loading="eager"
            />
          </motion.div>

          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--jumbotron"],
              seCss["section__subtitle--accent"],
              seCss["section__subtitle--narrow"],
              "text--center",
            )}
            style={{ marginTop: "1rem" }}
          >
            Whatever changes you made in your code are deployed to your
            application servers in seconds. Agnost enables you to save
            significant time by eliminating the need for dockerization; instead,
            Agnost can push code updates in realtime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

const SelfHosted = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: getThreshold(),
  })

  function getThreshold() {
    if (typeof window === "undefined") return 0.2
    return window.innerWidth < 768 ? 0.1 : 0.2
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section className={(clsx(seCss.section), seCss["section--odd"])}>
      <motion.div
        className={clsx(seCss["section--help"], seCss["section--center"])}
      >
        <motion.div ref={ref} className={juCss.jumbotron}>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__title,
              caCss["card__title--important"],
              seCss["section__title--jumbotron"],
              seCss["section__title--accent"],
              "text--center",
            )}
          >
            Effortlessly Self-host Agnost <br />
            using its Helm Chart
          </motion.h1>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(seCss["section--img"])}
          >
            <div className={`${shCss.browserWindow} mobileOnly`}>
              <div className={shCss.browserWindowHeader}>
                <div className={shCss.buttons}>
                  <span
                    className={shCss.dot}
                    style={{ background: "#f25f58" }}
                  />
                  <span
                    className={shCss.dot}
                    style={{ background: "#fbbe3c" }}
                  />
                  <span
                    className={shCss.dot}
                    style={{ background: "#58cb42" }}
                  />
                </div>
              </div>
              <Terminal />
            </div>
          </motion.div>
          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--jumbotron"],
              seCss["section__subtitle--accent"],
              seCss["section__subtitle--narrow"],
              "text--center",
            )}
            style={{ marginTop: "1rem" }}
          >
            Gain full control over your infrastructure, allowing you to
            customize and tailor Agnost platform to your specific needs. Ensure
            seamless integration into existing environments, increased security
            and freedom to adapt and scale the platform.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

const PrimaryAndReplica = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: getThreshold(),
  })

  function getThreshold() {
    if (typeof window === "undefined") return 0.2
    return window.innerWidth < 768 ? 0.1 : 0.2
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className={clsx(seCss.section)}>
      <motion.div
        className={clsx(seCss["section--help"], seCss["section--center"])}
      >
        <motion.div ref={ref} className={juCss.jumbotron}>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__title,
              caCss["card__title--important"],
              seCss["section__title--jumbotron"],
              seCss["section__title--accent"],
              "text--center",
            )}
          >
            Scale Your Database, Cache, and Message Queues
          </motion.h1>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(seCss["section--img"])}
          >
            <ImageSwitcher
              lightImageSrc="/img/pages/repl.png?text=Read replicas and Primary"
              darkImageSrc="/img/pages/repl.png?text=Read replicas and Primary"
              className={ilCss.illustration__hero}
              width={1359}
              height={530}
              alt="Read replicas and Primary"
              loading="eager"
            />
          </motion.div>
          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--jumbotron"],
              seCss["section__subtitle--accent"],
              seCss["section__subtitle--narrow"],
              "text--center",
            )}
            style={{ marginTop: "1rem" }}
          >
            Agnost takes replication to the next level. Effortlessly create
            replicas for databases, cache, and message queues. Seamlessly scale
            and distribute your critical data and messages across multiple
            instances, ensuring enhanced performance and availability. Don’t
            stuck with single instances, Agnost is for serious workloads.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* const CTA = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      className={clsx(seCss["section--slim--accent"], seCss["section--odd"])}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
    >
      <div className={juCss.jumbotron}>
        <motion.h1
          ref={ref}
          className={clsx(
            seCss.section__title,
            caCss["card__title--important"],
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
            "text--center",
          )}
        >
          Coming soon
        </motion.h1>

        <motion.p
          ref={ref}
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
            "text--center",
          )}
          style={{ marginTop: "1rem" }}
        >
          If you want to be an early adopter, or maintainer, join the mailing
          list.
        </motion.p>

      </div>
    </motion.section>
  )
} */

const Shaping = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      className={clsx(seCss["section--slim--accent"])}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
    >
      <div className={juCss.jumbotron}>
        <motion.h1
          ref={ref}
          className={clsx(
            seCss.section__title,
            caCss["card__title--important"],
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
            "text--center",
          )}
        >
          Take part in shaping the future of Agnost
        </motion.h1>

        <motion.p
          ref={ref}
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
            "text--center",
          )}
          style={{ marginTop: "1rem" }}
        >
          Guide us to build the best developer experience for you. Visit our
          GitHub repository and create a feature request.
        </motion.p>

        <div className={juCss.social__cta}>
          <Form />
        </div>
      </div>
    </motion.section>
  )
}

const DevelopmentEnvironment = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust this threshold as needed
  })

  return (
    <section
      className={
        (clsx(seCss.section),
        seCss["section--slim--accent"],
        seCss["section--odd"])
      }
    >
      <div
        className={clsx(seCss["section--sinner"], seCss["section--center"])}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={juCss.jumbotron}
        >
          <motion.h1
            className={clsx(
              seCss.section__title,
              seCss["section__title--jumbotron"],
              seCss["section__title--accent"],
              "text--center",
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Fully-customizable Environments
            <br /> in Minutes
            {/* <em key="slogans-withEase" className={seCss.section__title__em}>
              Development
            </em>{" "} */}
          </motion.h1>

          <motion.p
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--jumbotron"],
              seCss["section__subtitle--accent"],
              "text--center",
            )}
            style={{ marginTop: "1rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            MySQL, PostgreSQL, MongoDB, and Redis databases. RabbitMQ and Kafka
            message brokers. Cronjobs. Realtime. All in one place.
          </motion.p>
        </motion.div>
        <div
          className={clsx(
            seCss.section__footer,
            seCss["section__footer--feature-tabs"],
            seCss["section__footer--center"],
          )}
        >
          <div
            className={clsx(feCss.topfeatures, feCss["topfeatures--center"])}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 256 153"
              className="h-12 w-12 fill-current"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <path
                fill="currentColor"
                d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.373 45.373 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95c0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763c-.847 0-1.695-.424-2.543-1.187a26.224 26.224 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001c-6.612 7.798-14.92 11.698-24.922 11.698c-7.12 0-12.8-2.035-16.954-6.103c-4.153-4.07-6.272-9.495-6.272-16.276c0-7.205 2.543-13.054 7.714-17.462c5.17-4.408 12.037-6.612 20.768-6.612c2.882 0 5.849.254 8.985.678c3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563c-2.712-2.628-7.29-3.9-13.817-3.9c-2.967 0-6.018.34-9.155 1.103c-3.136.762-6.188 1.695-9.155 2.882c-1.356.593-2.373.932-2.967 1.102c-.593.17-1.017.254-1.356.254c-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966c.424-.594 1.187-1.187 2.374-1.78c2.967-1.526 6.527-2.798 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866c4.662 4.577 7.036 11.528 7.036 20.853v27.464h.17ZM37.976 68.323c2.798 0 5.68-.508 8.731-1.526c3.052-1.017 5.765-2.882 8.053-5.425c1.357-1.61 2.374-3.39 2.882-5.425c.509-2.034.848-4.493.848-7.375v-3.56a70.791 70.791 0 0 0-7.799-1.441a63.874 63.874 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391c-2.798 2.289-4.154 5.51-4.154 9.748c0 3.984 1.017 6.951 3.136 8.986c2.035 2.119 5.002 3.136 8.901 3.136Zm68.069 9.155c-1.526 0-2.543-.254-3.221-.848c-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391c0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848c.678.509 1.187 1.696 1.695 3.306l14.241 56.117l13.224-56.117c.424-1.695.933-2.797 1.61-3.306c.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847c.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306c.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119c0 .424-.085.848-.17 1.356c-.085.509-.254 1.187-.593 2.12l-20.43 65.525c-.508 1.696-1.101 2.798-1.78 3.306c-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848c-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676l-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391c-.678.594-1.865.848-3.39.848h-7.291Zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526c-4.239-1.017-7.544-2.12-9.748-3.39c-1.357-.764-2.29-1.611-2.628-2.374a5.983 5.983 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46.108 46.108 0 0 0 9.324 2.967a50.907 50.907 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797c2.882-1.865 4.408-4.577 4.408-8.053c0-2.373-.763-4.323-2.289-5.934c-1.526-1.61-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647c-2.797-3.73-4.238-7.883-4.238-12.291c0-3.56.763-6.697 2.289-9.41c1.525-2.712 3.56-5.085 6.103-6.95c2.543-1.95 5.425-3.391 8.816-4.408c3.39-1.017 6.95-1.441 10.68-1.441c1.865 0 3.815.085 5.68.339c1.95.254 3.73.593 5.51.932c1.695.424 3.306.848 4.832 1.357c1.526.508 2.712 1.017 3.56 1.525c1.187.679 2.034 1.357 2.543 2.12c.509.678.763 1.61.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713c-.678 0-1.78-.34-3.22-1.018c-4.833-2.204-10.258-3.306-16.276-3.306c-4.832 0-8.647.763-11.275 2.374c-2.627 1.61-3.984 4.069-3.984 7.544c0 2.374.848 4.408 2.543 6.019c1.696 1.61 4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137c2.628 3.476 3.9 7.46 3.9 11.868c0 3.645-.764 6.951-2.205 9.833c-1.525 2.882-3.56 5.425-6.188 7.46c-2.628 2.119-5.764 3.645-9.409 4.747c-3.815 1.187-7.799 1.78-12.122 1.78Z"
              />
              <path
                fill="#F90"
                d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442Zm11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789Z"
              />
            </motion.svg>
            <motion.h4
              className={feCss.help__header}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Amazon Web Services
            </motion.h4>
            <motion.p
              className={feCss.feature__content}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Deploy your apps to AWS EKS
            </motion.p>
          </div>

          <div className={feCss.topfeatures}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="44"
              viewBox="0 0 128 128"
              className="h-10 w-10 fill-current"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <defs>
                <linearGradient
                  id="deviconAzure0"
                  x1="60.919"
                  x2="18.667"
                  y1="9.602"
                  y2="134.423"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#114A8B" />
                  <stop offset="1" stopColor="#0669BC" />
                </linearGradient>
                <linearGradient
                  id="deviconAzure1"
                  x1="74.117"
                  x2="64.344"
                  y1="67.772"
                  y2="71.076"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity=".3" />
                  <stop offset=".071" stopOpacity=".2" />
                  <stop offset=".321" stopOpacity=".1" />
                  <stop offset=".623" stopOpacity=".05" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="deviconAzure2"
                  x1="68.742"
                  x2="115.122"
                  y1="5.961"
                  y2="129.525"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3CCBF4" />
                  <stop offset="1" stopColor="#2892DF" />
                </linearGradient>
              </defs>
              <path
                fill="url(#deviconAzure0)"
                d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 0 1-6.146 4.413H6.733a6.482 6.482 0 0 1-5.262-2.699a6.474 6.474 0 0 1-.876-5.848L39.944 4.414A6.488 6.488 0 0 1 46.09 0z"
                transform="translate(.587 4.468) scale(.91904)"
              />
              <path
                fill="#0078d4"
                d="M97.28 81.607H37.987a2.743 2.743 0 0 0-1.874 4.751l38.1 35.562a5.991 5.991 0 0 0 4.087 1.61h33.574z"
              />
              <path
                fill="url(#deviconAzure1)"
                d="M46.09.002A6.434 6.434 0 0 0 39.93 4.5L.644 120.897a6.469 6.469 0 0 0 6.106 8.653h32.48a6.942 6.942 0 0 0 5.328-4.531l7.834-23.089l27.985 26.101a6.618 6.618 0 0 0 4.165 1.519h36.396l-15.963-45.616l-46.533.011L86.922.002z"
                transform="translate(.587 4.468) scale(.91904)"
              />
              <path
                fill="url(#deviconAzure2)"
                d="M98.055 4.408A6.476 6.476 0 0 0 91.917.002H46.575a6.478 6.478 0 0 1 6.137 4.406l39.35 116.594a6.476 6.476 0 0 1-6.137 8.55h45.344a6.48 6.48 0 0 0 6.136-8.55z"
                transform="translate(.587 4.468) scale(.91904)"
              />
            </motion.svg>
            <motion.h4
              className={feCss.help__header}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Microsoft Azure
            </motion.h4>
            <motion.p
              className={feCss.feature__content}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Deploy your apps to Azure AKS
            </motion.p>
          </div>

          <div className={feCss.topfeatures}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
              className="h-12 w-12 fill-current"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <g fill="none">
                <rect width="256" height="256" />
                <path
                  fill="#EA4335"
                  d="m161.009 92.39l17.385-17.386l1.159-7.32c-31.68-28.807-82.04-25.54-110.6 6.816c-7.932 8.986-13.817 20.19-16.955 31.76l6.226-.878l34.77-5.733l2.684-2.745c15.466-16.986 41.617-19.272 59.475-4.82l5.856.305Z"
                />
                <path
                  fill="#4285F4"
                  d="M203.16 105.749a78.318 78.318 0 0 0-23.607-38.064l-24.4 24.4a43.37 43.37 0 0 1 15.921 34.404v4.331c11.993 0 21.716 9.722 21.716 21.715c0 11.994-9.723 21.473-21.716 21.473h-43.493l-4.27 4.636v26.047l4.27 4.087h43.493c31.195.243 56.681-24.605 56.924-55.8a56.483 56.483 0 0 0-24.838-47.229Z"
                />
                <path
                  fill="#34A853"
                  d="M84.149 208.778h43.432v-34.77H84.149a21.312 21.312 0 0 1-8.906-1.952l-6.161 1.891l-17.507 17.385l-1.525 5.917c9.818 7.413 21.796 11.582 34.099 11.529Z"
                />
                <path
                  fill="#FBBC05"
                  d="M84.149 95.989C52.953 96.175 27.815 121.615 28 152.81a56.486 56.486 0 0 0 22.049 44.438l25.193-25.193c-10.93-4.938-15.787-17.802-10.849-28.731c4.938-10.93 17.802-15.787 28.73-10.85a21.718 21.718 0 0 1 10.85 10.85l25.193-25.193a56.421 56.421 0 0 0-45.018-22.143Z"
                />
              </g>
            </motion.svg>
            <motion.h4
              className={feCss.help__header}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Google Cloud Platform
            </motion.h4>
            <motion.p
              className={feCss.feature__content}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Deploy your apps to GCP GKE
            </motion.p>
          </div>
          <div className={feCss.topfeatures}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-current"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <path
                fill="currentColor"
                d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
              />
            </motion.svg>
            <motion.h4
              className={feCss.help__header}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              On-Premise
            </motion.h4>
            <motion.p
              className={feCss.feature__content}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Deploy your apps to your own Kubernetes clusters
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

const WhyAgnost = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: getThreshold(),
  })

  function getThreshold() {
    if (typeof window === "undefined") return 0.2
    return window.innerWidth < 768 ? 0.1 : 0.2
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  const fadeInFromRightVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const fadeInFromLeftVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const fadeInFromBottomVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <motion.section className={(clsx(seCss.section), seCss["section--odd"])}>
      <motion.div
        className={clsx(seCss["section--sinner"], seCss["section--center"])}
      >
        <motion.div ref={ref} className={juCss.jumbotron}>
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={clsx(
              seCss.section__title,
              seCss["section__title--jumbotron"],
              seCss["section__title--accent"],
              "text--center",
            )}
          >
            Why Agnost?
          </motion.h1>

          <div
            className={clsx(
              seCss.section__why,
              seCss["section__footer--feature-cards"],
            )}
          >
            <div className={feCss.feature}>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromLeftVariants}
                className={ouCss.outcome__icon}
              >
                <svg
                  viewBox="0 0 512 512"
                  height="60"
                  width="60"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 fill-current"
                >
                  <title>Speedometer icon</title>
                  <path
                    fill="currentColor"
                    d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z"
                  ></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z"
                  ></path>
                  <line
                    x1="256"
                    x2="256"
                    y1="128"
                    y2="160"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  ></line>
                  <line
                    x1="416"
                    x2="384"
                    y1="288"
                    y2="288"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  ></line>
                  <line
                    x1="128"
                    x2="96"
                    y1="288"
                    y2="288"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  ></line>
                  <line
                    x1="165.49"
                    x2="142.86"
                    y1="197.49"
                    y2="174.86"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  ></line>
                  <line
                    x1="346.51"
                    x2="369.14"
                    y1="197.49"
                    y2="174.86"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  ></line>
                </svg>
              </motion.div>

              <motion.h3
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromLeftVariants}
                className={feCss.feature__header}
              >
                Streamline Cloud Application Deployment
              </motion.h3>

              <motion.p
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromLeftVariants}
                className={clsx(
                  seCss.section__subtitle,
                  seCss["feature__subtitle--jumbotron"],
                )}
              >
                Agnost simplifies the process of deploying and managing
                applications in the cloud.
              </motion.p>
            </div>

            <div className={feCss.feature}>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromBottomVariants}
                className={ouCss.outcome__icon}
              >
                <svg
                  viewBox="0 0 24 24"
                  height="60"
                  width="60"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 fill-current"
                >
                  <title>Leaf icon</title>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M21 3v2c0 9.627-5.373 14-12 14H5.243A17.056 17.056 0 005 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0zm-8 2a8 8 0 00-8 8c0 .362.003.711.01 1.046 1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C8.641 12.5 6.747 14.354 5.776 17H9c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188C13.627 5.027 13.401 5 13 5z"
                  ></path>
                </svg>
              </motion.div>
              <motion.h3
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromBottomVariants}
                className={feCss.feature__header}
              >
                Accelerate Infrastructure Setup
              </motion.h3>
              <motion.p
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromBottomVariants}
                className={clsx(
                  seCss.section__subtitle,
                  seCss["feature__subtitle--jumbotron"],
                )}
              >
                Allowing developers to focus on building software rather than
                managing infrastructure.
              </motion.p>
            </div>
            <div className={feCss.feature}>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromRightVariants}
                className={ouCss.outcome__icon}
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="h-12 w-12 fill-current"
                  viewBox="0 0 297 297"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M147.655,71.797c-17.947,0-32.548,14.601-32.548,32.548c0,17.947,14.601,32.548,32.548,32.548
				c17.947,0,32.548-14.601,32.548-32.548C180.203,86.398,165.603,71.797,147.655,71.797z M147.655,121.576
				c-9.501,0-17.231-7.73-17.231-17.231c0-9.501,7.73-17.231,17.231-17.231c9.501,0,17.231,7.73,17.231,17.231
				C164.886,113.846,157.156,121.576,147.655,121.576z"
                        />
                        <path
                          fill="currentColor"
                          d="M245.437,183.301c-9.288-14.255-20.467-20.807-26.304-23.446c3.134-20.065,4.186-40.095,1.127-57.195
				C209.149,40.542,155.333,3.222,153.048,1.663c-3.253-2.217-7.533-2.217-10.786,0c-2.285,1.558-56.101,38.879-67.211,100.996
				c-3.096,17.312-1.979,37.627,1.246,57.941c-6.122,3.043-16.221,9.637-24.734,22.7c-16,24.555-18.687,59.459-7.985,103.742
				c0.74,3.065,2.943,5.569,5.888,6.695c1.107,0.423,2.264,0.63,3.416,0.63c1.916,0,3.815-0.575,5.436-1.692l46.663-32.181
				c1.24,3.104,2.056,5.039,2.273,5.549c1.502,3.534,4.971,5.828,8.81,5.828h22.018v15.556c0,5.287,4.286,9.573,9.573,9.573
				s9.573-4.286,9.573-9.573v-15.556h22.018c3.839,0,7.308-2.294,8.81-5.828c0.237-0.558,1.193-2.828,2.637-6.464l47.989,33.096
				c1.621,1.117,3.521,1.692,5.436,1.692c1.152,0,2.31-0.208,3.416-0.63c2.945-1.126,5.147-3.629,5.888-6.695
				C264.123,242.76,261.437,207.856,245.437,183.301z M147.655,21.617c6.194,5.032,16.822,14.516,27.123,27.684h-54.246
				C130.835,36.13,141.464,26.647,147.655,21.617z M59.265,268.765c-10.448-57.725,9.367-80.269,20.823-88.232
				c5.157,23.501,12.272,45.624,17.937,61.501L59.265,268.765z M172.791,252.725h-15.563V176.86c0-5.287-4.286-9.573-9.573-9.573
				c-5.287,0-9.573,4.286-9.573,9.573v75.865h-15.567c-8.574-21.734-37.118-99.175-28.618-146.695
				c2.785-15.569,8.839-29.477,16.051-41.413h75.413c7.212,11.936,13.267,25.844,16.051,41.413
				C209.901,153.495,181.364,230.978,172.791,252.725z M237.736,268.765l-40.116-27.666c5.688-16.028,12.744-38.143,17.816-61.546
				C226.546,186.558,248.648,208.471,237.736,268.765z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </motion.div>

              <motion.h3
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromRightVariants}
                className={feCss.feature__header}
              >
                Bypass Vendor Lock-in
              </motion.h3>
              <motion.p
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInFromRightVariants}
                className={clsx(
                  seCss.section__subtitle,
                  seCss["feature__subtitle--jumbotron"],
                )}
              >
                Providing a consistent and portable platform across different
                cloud environments.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout description={siteConfig.tagline}>
      {/* <HomepageHeader /> */}
      <Hero />
      <WhyAgnost />
      <AllInOneBackend />
      <SelfHosted />
      <PrimaryAndReplica />
      <Serverless />
      <Realtime />
      <DevelopmentEnvironment />
      {/*  <CTA /> */}
      <Shaping />
    </Layout>
  )
}
