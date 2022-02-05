import React, { useState } from 'react';

function BlogFilter({ setSearchParams, postQuery, latest }) {
  const [search, setSearch] = useState(postQuery);
  const [checked, setCkecked] = useState(latest);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label style={{ padding: '0 1rem' }}>New only
        <input type="checkbox" name="latest" value={checked} onChange={(e) => setCkecked(e.target.value)} />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default BlogFilter;
