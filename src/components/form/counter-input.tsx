"use client";

import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

type CounterInputProps = {
  defaultValue?: number;
  detail?: string;
};

function CounterInput({ defaultValue, detail }: CounterInputProps) {
  const [count, setCount] = useState(defaultValue || 0);
  const increement = () => setCount((prev) => prev + 1);
  const decreement = () =>
    setCount((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });

  return (
    <Card className="mb-4">
      <input type="hidden" value={count} name={detail} />
      <CardHeader className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col">
            <h2 className="font-medium capitalize">{detail}</h2>
            <p className="text-muted-foreground text-sm">
              Specify the number of {detail}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              size={"icon"}
              type="button"
              variant={"outline"}
              onClick={decreement}
            >
              <LuMinus className="w-5 h-5 text-primary" />
            </Button>
            <span className="text-xl text-center w-5 font-bold">{count}</span>
            <Button
              size={"icon"}
              type="button"
              variant={"outline"}
              onClick={increement}
            >
              <LuPlus className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CounterInput;
