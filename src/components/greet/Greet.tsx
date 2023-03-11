import React from 'react';

type GreetProps = {
  name?: string;
};

export default function greet({ name }: GreetProps) {
  return <div>Hello {name} </div>;
}
