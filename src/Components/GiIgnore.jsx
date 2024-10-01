import React from 'react';
import './GitIgnore.css';

const GitIgnore = () => {
  return (
    <section className="gitignore">
      <h2>.gitignore File</h2>
      <pre className="gitignore-code">
        <code>
          <span className="comment"># Ignore node_modules</span><br />
          <span className="directory">/node_modules/</span><br /><br />
          <span className="comment"># Ignore build output</span><br />
          <span className="directory">/build/</span><br /><br />
          <span className="comment"># Ignore environment variables</span><br />
          <span className="file">.env</span><br />
          <span className="file">.env.local</span><br /><br />
          <span className="comment"># Ignore logs</span><br />
          <span className="file">*.log</span><br />
          <span className="file">npm-debug.log*</span>
        </code>
      </pre>
      
      {/* Burbuja animada para efecto visual */}
      <div className="bubble-git"></div>
    </section>
  );
};

export default GitIgnore;
