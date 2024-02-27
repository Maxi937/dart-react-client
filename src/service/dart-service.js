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

  async getDocGenStatus(env, startTime, endTime, signal = null) {
    const { data } = await axios.get("api/docgen/monitor", {
      params: {
        env: String(env).toLowerCase(),
        start: startTime,
        end: endTime
      },
      signal,
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data
  },

  async compare(candidate, baseline, signal = null) {
    const { data } = await axios.post(
      "api/streamdiff",
      { candidate: candidate, baseline: baseline },
      {
        headers: { "Content-Type": "multipart/form-data" },
        signal,
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

  async getXpressionDocumentModels(env, signal = null) {
    const { data } = await axios.get(`/api/xpression/models`, {
      params: {
        env: env,
      },
      signal
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async getRequestXmlForCorrelationId(env, correlationId, signal = null) {
    const { data } = await axios.get(`/api/docgen/getrequestxml`, {
      params: {
        env: env,
        correlationId: correlationId
      },
      signal
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },
};
