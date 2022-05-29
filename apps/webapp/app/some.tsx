import { Outlet } from '@remix-run/react';

export default function Some() {
  return (
    <div>
      <h1>Some</h1>
      <Outlet />
    </div>
  );
}
