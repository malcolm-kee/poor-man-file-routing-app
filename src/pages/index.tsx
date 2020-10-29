import * as React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <div>
        <Link to="/details" className="hover:underline">
          Details
        </Link>
      </div>
    </div>
  );
}
