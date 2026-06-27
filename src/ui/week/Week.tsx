"use client";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import React from "react";

const items: MenuProps["items"] = [
  {
    key: "شنبه",
    label: <span>شنبه</span>,
  },
  {
    key: "یک‌شنبه",
    label: <span>یکشنبه</span>,
  },
  {
    key: "دوشنبه",
    label: <span>دوشنبه</span>,
  },
  {
    key: "سه‌شنبه",
    label: <span>سه شنبه</span>,
  },
  {
    key: "چهارشنبه",
    label: <span>چهارشنبه</span>,
  },
  {
    key: "پنج‌شنبه",
    label: <span>پنج شنبه</span>,
  },
  {
    key: "جمعه",
    label: <span>جمعه</span>,
  },
];

const Week: React.FC = ({ getDayOfWeek, daysOfWeek }) => {
  function handleDaySelection(e) {
    console.log("e target", e);
    getDayOfWeek(e.key);
  }
  return (
    <Dropdown menu={{ items, onClick: handleDaySelection }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="px-2">
          {daysOfWeek ?? "روزهای هفته"}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Week;
