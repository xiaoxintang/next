"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // 从 cookie 中获取访问次数
    const count = parseInt(Cookies.get("visitCount") || "0");
    // 增加访问次数
    const newCount = count + 1;
    // 更新 cookie
    Cookies.set("visitCount", newCount.toString(), { expires: 365 });
    // 更新状态
    setVisitCount(newCount);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">欢迎访问</h1>
        <p className="text-xl">
          这是您第 <span className="font-bold text-blue-600">{visitCount}</span>{" "}
          次访问本站
        </p>
      </main>
    </div>
  );
}
