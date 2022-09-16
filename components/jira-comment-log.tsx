import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { ClipboardCopyIcon, CheckCircleIcon, RefreshIcon } from '@heroicons/react/solid';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CreateSubmitLog: NextPage = () => {
  const [keyword, setKeyword] = useState('');
  const [summary, setSummary] = useState('');
  const [impact, setImpact] = useState('');
  const [impactCheckBox, setImpactCheckBox] = useState(false);
  const [test, setTest] = useState('');

  const [result, setResult] = useState('');

  useEffect(() => {
    let template = `[원인분석]\n{{__keyword__}}\n\n[해결방법]\n{{__summary__}}\n\n[예상되는 문제점]\n{{__impact__}}\n\n[수정된 리비전]\n{{__test__}}`;
    template = template.replace('{{__keyword__}}', keyword);
    template = template.replace('{{__summary__}}', summary);
    template = template.replace('{{__impact__}}', impact);
    template = template.replace('{{__test__}}', test);
    setResult(template);
  });

  const onChangTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.id === 'textarea-keyword') {
      setKeyword(e.target.value);
    }

    if (e.target.id === 'textarea-summary') {
      setSummary(e.target.value);
    }

    if (e.target.id === 'textarea-impact') {
      setImpact(e.target.value);
    }

    if (e.target.id === 'textarea-test') {
      setTest(e.target.value);
    }
  };

  const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'checkbox-impact') {
      setImpactCheckBox(e.target.checked);
      if (e.target.checked) {
        setImpact('없음');
      } else {
        setImpact('');
      }
    }
  };

  const onClickCopy = () => {
    alert('😊 복사 완료!\n' + result);
  };

  const onClickInit = () => {
    setKeyword('');
    setSummary('');
    setImpact('');
    setImpactCheckBox(false);
    setTest('');
  };

  const onKeyPressLock = (e: React.KeyboardEvent<Element>) => {
    if (e.code == 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="mt-3 ml-3 mb-3 mr-3 w-1/2">
          <div>
            <form className="space-y-3">
              <div className="col-span-3 sm:col-span-2">
                <div className="flex items-center text-sm text-gray-700">
                  {keyword === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                  원인분석
                </div>
                <textarea
                  name="textarea-keyword"
                  id="textarea-keyword"
                  rows={3}
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="ex) 머지 누락된 부분이 있었습니다."
                  onChange={onChangTextArea}
                  value={keyword}
                  onKeyPress={onKeyPressLock}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <div className="flex items-center text-sm text-gray-700">
                  {summary === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                  해결방법
                </div>
                <textarea
                  name="textarea-summary"
                  id="textarea-summary"
                  rows={3}
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="ex) 누락된 부분을 머지 하였습니다."
                  onChange={onChangTextArea}
                  value={summary}
                  onKeyPress={onKeyPressLock}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex items-center text-sm text-gray-700">
                    {impact === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                    예상되는 문제점
                  </div>
                  <input
                    id="checkbox-impact"
                    name="checkbox-impact"
                    type="checkbox"
                    className="sm:mt-0 sm:ml-3 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    onChange={onChangeCheckBox}
                    checked={impactCheckBox}
                  />
                  <label className="text-sm text-gray-900" htmlFor="checkbox-impact">
                    없음
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-impact"
                    name="textarea-impact"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="ex) 클라이언트 확인 필요"
                    onChange={onChangTextArea}
                    value={impact}
                    disabled={impactCheckBox}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex items-center text-sm text-gray-700">
                    {test === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                    수정된 리비전
                  </div>
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-test"
                    name="textarea-test"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="ex) Live2.0 987654"
                    onChange={onChangTextArea}
                    value={test}
                  />
                </div>
              </div>

              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  {keyword !== '' && summary !== '' && impact !== '' && test !== '' ? (
                    <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />
                  ) : (
                    <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" />
                  )}
                  <div className="text-sm font-medium text-gray-700">결과</div>
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-result"
                    name="textarea-result"
                    rows={16}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md text-gray-400"
                    value={result}
                    disabled
                  />
                </div>
              </div>
            </form>

            <div className="py-4 text-right">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={onClickInit}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  <RefreshIcon className="-ml-1 mr-2 h-5 w-5" />
                  초기화
                </button>
              </div>
              <div className="inline-flex rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
                <CopyToClipboard text={result}>
                  <button
                    onClick={onClickCopy}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    <ClipboardCopyIcon className="-ml-1 mr-2 h-5 w-5" />
                    복사
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSubmitLog;
