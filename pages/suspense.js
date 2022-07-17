import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import Spinner from "../components/Spinner";
import styles from "../styles/Home.module.css";
const RenderPosts = dynamic(() => import("../components/Posts"), {
  suspense: true,
});

export default function SuspenseTest({ posts, data }) {
  const [age, setAge] = useState(10);
  return (
    <div className={styles.container}>
      <button>I am another element</button>
      {/* <ul>
        {data?.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul> */}

      {/* Suspense Testing here ------------------------ */}
      <Suspense fallback={<Spinner />}>
        <RenderPosts posts={posts} />
      </Suspense>
      {/* Suspense Testing here ------------------------ */}
      {/* {renderPosts()} */}

      <div>
        <label>My age is: {age}</label>
        <br />
        <button onClick={() => setAge((prevState) => prevState + 1)}>
          Grow me older !!
        </button>
      </div>
    </div>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();
  console.log("__________________________________________\n");
  // let i = 0;
  // let signal = false;
  // let max = 9999999900;
  // while (i < max) {
  //   if (i === max - 1) {
  //     signal = true;
  //     console.log("made signal true");
  //   }
  //   i++;
  // }
  // console.log("signal - ", signal);

  console.log("__________________________________________\n");

  return {
    props: {
      posts: posts,
      data: [1, 2, 3],
    },
  };
};
