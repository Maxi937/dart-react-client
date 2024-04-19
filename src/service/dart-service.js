import axios from "axios";
import { registerAxiosResponseHandler } from "../utils/service-utils.js";

registerAxiosResponseHandler(axios);

export const dartService = {
  
  async getContentGroup(documentName, id, env, signal = null) {
    const { data } = await axios.get(`/api/xpression/${documentName}/content`, {
      params: {
        textClassId: id,
        env: env,
      },
      signal: signal,
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async testBdt(bdtSequence, candidate, signal = null) {
    const { data } = await axios.post(
      `/api/dart/bdt/test`,
      { sequence: bdtSequence, candidate: candidate },
      {
        signal,
      }
    );

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async compileBdt(documentModel, env, candidate, signal = null) {
    const { data } = await axios.post(
      `/api/dart/bdt/${documentModel.mdl_nm}`,
      { env: env, documentModel: documentModel, candidate: candidate },
      {
        signal,
      }
    );

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async migrationTests(documentModel, env, key, signal = null) {
    const { data } = await axios.post(
      `/api/dart/migration/${documentModel.mdl_nm}`,
      { env: env, documentModel: documentModel },
      {
        signal,
      }
    );

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async analyseBdt(documentModel, env, signal = null) {
    console.log(documentModel);
    const { data } = await axios.get(`/api/dart/bdt/${documentModel.mdl_cd}`, {
      params: {
        ...documentModel,
        env: env,
      },
      signal: signal,
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async getBdt(documentModel, env, signal = null) {
    const { data } = await axios.get(`/api/xpression/bdt`, {
      params: {
        documentName: documentModel.mdl_nm,
        env: env,
      },
      signal: signal,
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async getNotifcations() {
    const { data } = await axios.get("/api/dart/notifications");

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async getEnvironments() {
    const { data } = await axios.get("/api/dart/environments");

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async getDocumentationTree(signal = null) {
    const { data } = await axios.get("/api/dart/documentation");

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async getBaselineTree(signal = null) {
    const { data } = await axios.get("/api/dart/baseline");

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async getDocumentation(name, signal = null) {
    const { data } = await axios.get(`/api/dart/documentation/${name}`);

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async generateBaseline(env, documentModelCode, name, signal = null) {
    const { data } = await axios.post(
      "/api/dart/baseline",
      { env: env, code: documentModelCode, path: name },
      {
        signal,
      }
    );

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async generateXpression(env, documentModelCode, file, signal = null) {
    const { data } = await axios.post(
      "/api/xpression",
      { documentModelCode: documentModelCode, file: file, env: env },
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

  async getDocGenStatus(query, signal = null) {
    const { data } = await axios.get("/api/docgen/monitor", {
      params: {
        ...query,
      },
      signal,
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },

  async compare(candidate, baseline, signal = null) {
    const { data } = await axios.post(
      "/api/streamdiff",
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
    const { data } = await axios.post(`/api/xpression/${filenet}`, {
      env: env,
    });
    return data;
  },

  async getXDocumentFromFilenet(env, code, filenet) {
    const { data } = await axios.post(`/api/xpression/xdocument/${filenet}`, {
      env: env,
      code: code,
    });
    return data;
  },

  async compareCustomisedAgainstOriginal(env, code, filenet) {
    const { data } = await axios.post(`/api/streamdiff/${filenet}`, {
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
      signal,
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
        correlationId: correlationId,
      },
      signal,
    });

    if (!data.success) {
      throw new Error(data.error);
    }

    return data;
  },
};
