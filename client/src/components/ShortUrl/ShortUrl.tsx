import { useState } from "react";
import classes from "./ShortUrl.module.css";
import axios from "axios";
import { Input, Button, notification } from "antd";

const { TextArea } = Input;

interface AxiosError {
  response: {
    data: {
      message: string;
    };
  };
}

function ShortUrl() {
  const [api, contextHolder] = notification.useNotification();
  const [url, setUrl] = useState<string>("");

  const handleShortUrl = () => {
    console.log(url);
    axios({ method: "post", url: "/urls", data: { longUrl: url } })
      .then((res) => {
        api.success({
          message: "The request was resolved successfully!",
          description: `The short url is: ${res.data} was copied to your clipboard`,
          duration: 10
        });
        navigator.clipboard.writeText(res.data)
      })
      .catch(({ response }: AxiosError) => {
        api.error({
          message: "Something goes wrong",
          description: `Error during request last urls: ${response?.data?.message}`,
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setUrl(value.trim());
  };

  return (
    <>
      {contextHolder}
      <div className={classes.wrapper}>
        <TextArea
          rows={4}
          placeholder="Enter url to short it"
          onChange={handleChange}
        />
        <Button type="primary" onClick={handleShortUrl}>
          Short url!
        </Button>
      </div>
    </>
  );
}

export default ShortUrl;
