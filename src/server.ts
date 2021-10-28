import 'dotenv';
import { app } from "./app";

app.listen(process.env.PORT || 3333, () => console.log('Server IPASS is running in port 3333'));