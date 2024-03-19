import React from 'react';

export default function Input({ setdata }) {
  return (
    <div>
      {/* onchange 이벤트가 일어날 때 */}
      <input
        type="text"
        onChange={(e) => {
          setData((data) => {
            return { ...data, content: e.target.value };
          });
        }}
      />
    </div>
  );
}
