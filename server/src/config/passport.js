import basic from "../api/strategy/basic";
import jwt from "../api/strategy/jwt";

export default function passport() {
    basic();
    jwt();
}