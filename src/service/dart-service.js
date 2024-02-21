import axios from "axios";
import { registerAxiosResponseHandler } from "../utils/service-utils.js";

registerAxiosResponseHandler(axios);

export const dartService = {
  async getEnvironments() {
    const { data } = await axios.get("api/dart/environments");

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async generateXpression(env, documentModelCode, file, signal = null) {
    const { data } = await axios.post(
      "api/xpression",
      { documentModelCode: documentModelCode, file: file, env: env },
      {
        headers: { "Content-Type": "multipart/form-data" },
        signal,
      }
    );

    if (!data.success) {
      throw new Error(data.document);
    }

    return data;
  },

  async compare(candidate, baseline) {
    const { data } = await axios.post(
      "api/streamdiff",
      { candidate: candidate, baseline: baseline },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async getFilenetPdf(filenet, env) {
    const { data } = await axios.post(`api/xpression/${filenet}`, { env: env });
    return data;
  },

  async getXDocumentFromFilenet(env, code, filenet) {
    const { data } = await axios.post(`api/xpression/xdocument/${filenet}`, {
      env: env,
      code: code,
    });
    return data;
  },

  async compareCustomisedAgainstOriginal(env, code, filenet) {
    const { data } = await axios.post(`api/streamdiff/${filenet}`, {
      env: env,
      code: code,
    });
    return data;
  },

  async getXpressionDocumentModels(env) {
    const { data } = await axios.get(`/api/xpression/models`, {
      params: {
        env: env,
      },
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },
};
