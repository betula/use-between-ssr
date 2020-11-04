import React, { useState } from 'react'
import Head from 'next/head'
import { useBetween } from 'use-between';
import { InitialData } from '../interfaces/initial-data';

const useUserList = (data: InitialData) => {
  const [userList] = useState(data.userList);
  return userList;
};

const useSharedUserList = () => useBetween(useUserList);

const IndexPage = () => {
  const userList = useSharedUserList();
  return (
    <>
      <Head>
        <title>use-between ssr</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <h1>useBetween SSR</h1>
        <ul>
          {userList.map(({id, name}) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </main>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      userList: [
        { id: 101, name: 'Alice' },
        { id: 102, name: 'Bob' },
        { id: 103, name: 'Caroline' },
        { id: 104, name: 'Dave' },
      ],
    } as InitialData,
  };
}

export default IndexPage

