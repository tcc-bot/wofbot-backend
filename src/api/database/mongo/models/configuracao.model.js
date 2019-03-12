import mongoose from "mongoose";

const configuracao = new mongoose.Schema({
    exchange: { type: String },
    api_key: { type: String },
    secret: { type: String },
    target_currency: [{ currency: { type: String } }],
    base_currency: { type: String },
    purchase_quantity: { type: Number },
    profit: { type: Number },
    stop: { type: Number },
    sellForIndicator: { type: Boolean },
    maxOrdersOpen: { type: Number },
    candle_size: { type: String },
    user: {
        user_name: { type: String, from: true },
        user_id: { type: String, from: true },
    },
    status: {
        status_bot: { type: Boolean },
        status_buy: { type: Boolean },
        status_sell: { type: Boolean },
        key: { type: String },
        interval_check: { type: Number },
    },
    strategy: {
        indicators: {
            ema: {
                status: { type: Boolean },
                short_period: { type: Number },
                long_period: { type: Number },
            },
            macd: {
                status: { type: Boolean },
                short_period: { type: Number },
                long_period: { type: Number },
                signal_period: { type: Number },
            },
            cci: {
                status: { type: Boolean },
                period: { type: Number },
            },
            bbands: {
                status: { type: Boolean },
                period: { type: Number },
                stddev_period: { type: Number },
            },
            stoch: {
                status: { type: Boolean },
                k_period: { type: Number },
                k_slow_period: { type: Number },
                d_period: { type: Number },
            },
        },
    },
});

export default mongoose.model("configuracao", configuracao, "configuracao");
