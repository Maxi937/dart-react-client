import axios from "axios";
import { registerAxiosResponseHandler } from "../utils/service-utils.js";

registerAxiosResponseHandler(axios);

export const dartService = {
  async getData() {
    const { data } = await axios.get("api/xpression");
    return data;
  },

  async testGenerateXpression(env, code, xml) {
    const { data } = await axios.post(
      "api/xpression",
      { code: code, file: xml, env: env },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

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
    return data;
  },
};
