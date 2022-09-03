# Currency Converter
[LIVE](https://currency-converter-6jugpdssx-sabraman.vercel.app/)

The app is a [__Next.JS__](https://nextjs.org) project which utilizes the __SSR__ (Server Side Rendering) feature and uses the third-party data fetching service, __SWR__ This makes sure that data will always be available whenever you use this app.

---

## Instalation

To run:

1. Clone repository

```bash
git clone https://github.com/sabraman/currency-converter.git
```

2. Add to `.env` Api Key and Api Url
```
NEXT_PUBLIC_API_KEY=YOURAPIKEY
NEXT_PUBLIC_BASE_URL=YOURAPIURL
```

3. Run project

```bash
cd currency-converter/
yarn && yarn dev
```

A great feature of Nextjs, [Server Side Props](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props). When you request this page directly, getServerSideProps runs at request time, and this page will be pre-rendered with the returned props:

```js
export async function getServerSideProps() {
  let response = await api().get(`api-end-point`)

  return {
    props: {
      currencies: response.currencies || [],
    },
  }
}
```
If your page contains frequently updating data, and you don’t need to pre-render the data, [SWR](https://swr.vercel.app/) is a perfect fit and no special setup needed: just import useSWR and use the hook inside any components that use the data.

```js
const { data } = useSWR(`/api-end-point`)
```

SWR Global config:\
_Documentation for the options can be found [here](https://swr.vercel.app/docs/options)_

```js
<SWRConfig
  value={{
    fetcher: (url) => fetch(url).then((response) => response.json()),
    revalidateOnFocus: false, // Do not revalidate on window refocus
    dedupingInterval: 1000 * 60 * 60 * 24, // 1 day
    onError: errorCallback, // Callback function if there are errors
    errorRetryCount: 2, // Retry limit
  }}
>
  {children}
</SWRConfig>
```

---

## CSS Framework: [__Chakra UI__](https://chakra-ui.com/)
Responsive and supports both light and dark mode. Just click the gear icon at the bottom to toggle color mode.

![Dark Desktop](https://github.com/sabraman/currency-converter/blob/main/public/images/dark-desktop.png?raw=true)
![Light Desktop](https://github.com/sabraman/currency-converter/blob/main/public/images/light-desktop.png?raw=true)
![Dark Mobile](https://github.com/sabraman/currency-converter/blob/main/public/images/dark-mobile.png?raw=true)
![Light Mobile](https://github.com/sabraman/currency-converter/blob/main/public/images/light-mobile.png?raw=true)

---

## Limitations of api

Currently, these are the limitations of this app:

1. The data updates only once a day.
2. The currency name is not returned, only the code (i.e. USD, RUB). It would be better if you can see the currency name alongside the code for a much better user experience.

These limitations can be overcome either by upgrading the plan or by finding another API service which returns the currency name.
