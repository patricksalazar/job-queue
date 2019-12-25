const Queue = require("bull");
const fs = require("fs");
const models = require("../models");
const ytdl = require("ytdl-core");
const uuidv1 = require("uuid/v1");
const util = require("util");

const createVideoQueue = () => {
  const videoQueue = new Queue("video transcoding", {
    redis: {
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_URL
    }
  });

  videoQueue.process(async (job, done) => {
    const data = job.data;
    try {
      job.progress(0);
      global.Function.emit("progress", { progress: 0, jobId: data.id });
    }
  });
};
