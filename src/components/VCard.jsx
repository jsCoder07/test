import React from "react";

const VCard = (props) => {
  return (
    <div class="max-w-sm bg-zinc-800/90 rounded-lg   shadow-lg dark:bg-gray-800 dark:border-gray-700 prose-sm ">
      <a href="#">
        <img class="rounded-t-lg" src={props.background} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-200 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
          {props.content}
        </p>
        <a
          href="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default VCard;
