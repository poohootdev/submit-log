import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { CalendarIcon, ClipboardCopyIcon, CheckCircleIcon, RefreshIcon } from '@heroicons/react/solid';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CreateSubmitLog: NextPage = () => {
  const [keyword, setKeyword] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [impact, setImpact] = useState('');
  const [test, setTest] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    let template = `[이슈키워드]: "{{__keyword__}}" {{__summary__}}\n{{__description__}}\n[영향범위]:{{__impact__}}\n[테스트건의]:{{__test__}}`;
    template = template.replace('{{__keyword__}}', keyword);
    template = template.replace('{{__summary__}}', summary);
    template = template.replace('{{__description__}}', description);
    template = template.replace('{{__impact__}}', impact);
    template = template.replace('{{__test__}}', test);
    setResult(template);
  });

  const onChangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'input-keyword') {
      setKeyword(e.target.value);
    }

    if (e.target.id === 'input-summary') {
      setSummary(e.target.value);
    }
  };

  const onChangTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.id === 'textarea-description') {
      setDescription(e.target.value);
    }

    if (e.target.id === 'textarea-impact') {
      setImpact(e.target.value);
    }

    if (e.target.id === 'textarea-test') {
      setTest(e.target.value);
    }
  };

  const onClickCopy = () => {
    alert('😊 복사 완료!\n' + result);
  };

  const onClickInit = () => {
    setKeyword('');
    setSummary('');
    setDescription('');
    setImpact('');
    setTest('');
  };

  return (
    <>
      <div>
        <div className="mt-3 ml-3 mb-3 mr-3 md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="text-gray-600">☕ 서밋 로그 생성기</span>
              </h2>
              <div className="mt-2 ml-2 flex items-center text-sm text-gray-500">
                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                update : 2022-05-19
              </div>
              <div className="mt-2 ml-2 flex items-center text-sm text-gray-500">
                <ClipboardCopyIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                입력폼대로 입력 후, 복사!
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="col-span-3 sm:col-span-2">
                <div className="flex items-center text-sm text-gray-700">
                  {keyword === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                  키워드
                </div>
                <input
                  type="text"
                  name="input-keyword"
                  id="input-keyword"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="ex) 강화"
                  onChange={onChangInput}
                  value={keyword}
                />
              </div>
              <div className="py-3"></div>

              <div className="col-span-6 sm:col-span-3">
                <div className="flex items-center text-sm text-gray-700">
                  {summary === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                  한줄요약
                </div>
                <input
                  type="text"
                  name="input-summary"
                  id="input-summary"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="ex) 결과창 가이드 추가"
                  onChange={onChangInput}
                  value={summary}
                />
              </div>
              <div className="py-3"></div>

              <div>
                <div className="flex items-center text-sm text-gray-700">
                  {description === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                  설명
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-description"
                    name="textarea-description"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder={'ex) hansoft://hansoft.xxx.com;hansoft;abcde1234/Task/56789?ID=12345\n- 강화 결과창 가이드 추가\n- 연출 수정'}
                    onChange={onChangTextArea}
                    value={description}
                  />
                </div>
              </div>
              <div className="py-3"></div>

              <div>
                <div className="flex items-center">
                  <div className="flex items-center text-sm text-gray-700">
                    {impact === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                    영향범위
                  </div>
                  {/* <input id="checkbox-impact" name="checkbox-impact" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <div className="text-sm text-gray-900">없음</div> */}
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-impact"
                    name="textarea-impact"
                    rows={5}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="ex) 강화 결과창"
                    onChange={onChangTextArea}
                    value={impact}
                  />
                </div>
              </div>
              <div className="py-3"></div>

              <div>
                <div className="flex items-center">
                  <div className="flex items-center text-sm text-gray-700">
                    {test === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                    테스트 건의
                  </div>
                  {/* <input id="checkbox-test" name="checkbox-test" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <div className="text-sm text-gray-900">없음</div> */}
                </div>
                <div className="mt-1">
                  <textarea
                    id="textarea-test"
                    name="textarea-test"
                    rows={5}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="ex) 강화 결과창 가이드, 연출이 정상적으로 출력이 되는지 확인"
                    onChange={onChangTextArea}
                    value={test}
                  />
                </div>
              </div>

              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-7">
                  <div className="border-t border-gray-200" />
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  {keyword !== '' && summary !== '' && description !== '' && impact !== '' && test !== '' ? (
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
                    rows={10}
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
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  <RefreshIcon className="-ml-1 mr-2 h-5 w-5" />
                  초기화
                </button>
              </div>
              <div className="inline-flex rounded-md shadow">
                <CopyToClipboard text={result}>
                  <button
                    onClick={onClickCopy}
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
