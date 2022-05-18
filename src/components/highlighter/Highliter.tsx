import React, { FC } from "react";
import { Box, Paper } from "@mui/material";
import hljs from "highlight.js/lib/core";
import fortran from "highlight.js/lib/languages/fortran";
hljs.registerLanguage("fortran", fortran);

const Highlighter: FC<{ content: string }> = ({ content }) => {
  const highlighted = hljs.highlight(content, { language: "fortran" });

  return (
    <Paper
      sx={{
        width: "100%",
        height: "350px",
        overflowY: "scroll",
        padding: "15px",
      }}
      component="pre"
      className="hljs"
    >
      <Box
        component="code"
        dangerouslySetInnerHTML={{ __html: highlighted.value }}
      />
    </Paper>
  );
};

export default Highlighter;
