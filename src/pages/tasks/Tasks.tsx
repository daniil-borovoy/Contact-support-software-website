import React from "react";
import { Box, Container, styled, TextField, Typography } from "@mui/material";

const Tasks = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Container sx={{ padding: "15px 15px 50px 15px" }}>
        <Typography
          fontWeight="bold"
          variant="h1"
          fontSize="22px"
          textAlign="center"
          mb={5}
        >
          Задачи
        </Typography>
        <Typography variant="h5">
          Задача А (жесткая заделка) – Нахождение безразмерной силы P
        </Typography>
        <Typography mb={5} variant="h6">
          Ввести параметры a, b
        </Typography>
        <Box
          mb={5}
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр а"
            label="Параметр а"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр b"
            label="Параметр b"
          />
        </Box>
        <Typography variant="h5">
          Задача Б (отсутствие напряжения) – Нахождение безразмерного давления φ
        </Typography>
        <Typography mb={5} variant="h6">
          Ввести параметры a, b
        </Typography>
        <Box
          width="100%"
          display="flex"
          mb={5}
          flexDirection="row"
          justifyContent="space-around"
        >
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр а"
            label="Параметр а"
          />

          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр b"
            label="Параметр b"
          />
        </Box>
        <Typography variant="h5">
          Задача В (учет шероховатости) – Нахождение давления φ
        </Typography>
        <Typography mb={5} variant="h6">
          Ввести параметры lam, A, be, del
        </Typography>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          gap={2}
        >
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр lam"
            label="Параметр lam"
          />

          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр A"
            label="Параметр A"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр be"
            label="Параметр be"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр del"
            label="Параметр del"
          />
        </Box>
        <Typography variant="h5">
          Трехмерный случай – нахождение силы P и давления φ
        </Typography>
        <Typography mb={5} variant="h6">
          Ввести параметры alfa, nx, ny, eps, A, B, lam, del
        </Typography>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          gap={2}
        >
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр alfa"
            label="Параметр alfa"
          />

          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр nx"
            label="Параметр nx"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр ny"
            label="Параметр ny"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр eps"
            label="Параметр eps"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр A"
            label="Параметр A"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр B"
            label="Параметр B"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр lam"
            label="Параметр lam"
          />
          <TextField
            defaultValue={0}
            type="number"
            color="primary"
            InputLabelProps={{ shrink: true }}
            helperText="Введите параметр del"
            label="Параметр del"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Tasks;
