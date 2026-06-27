"use client";

import { NextIntlClientProvider } from "next-intl";
import React from "react";

type IntlProps = {
  children: React.ReactNode;
  messages: Record<string, string>;
};
const NextIntlProvider = ({ children, messages }: IntlProps) => {
  return (
    <NextIntlClientProvider locale="fa" messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default NextIntlProvider;
