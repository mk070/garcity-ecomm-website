import { Express } from "express";
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = Express ()