@extends('layouts.skeleton')

@section('title', $contact->getCompleteName(auth()->user()->name_order) )

@section('content')
  <div class="people-show" data-contact-id="{{ $contact->id }}">
    {{ csrf_field() }}

    {{-- Breadcrumb --}}
    <div class="breadcrumb">
      <div class="{{ Auth::user()->getFluidLayout() }}">
        <div class="row">
          <div class="col-xs-12">
            <ul class="horizontal">
              <li>
                <a href="/dashboard">{{ trans('app.breadcrumb_dashboard') }}</a>
              </li>
              <li>
                <a href="/groups">{{ trans('app.breadcrumb_list_contacts') }}</a>
              </li>
              <li>
                {{ $contact->getCompleteName(auth()->user()->name_order) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {{-- Page header --}}
    @include('people._header')

    {{-- Page content --}}
    <div class="main-content profile">

      <div class="{{ Auth::user()->getFluidLayout() }}">

        <div class="row">
          {{--<div class="col-xs-12 col-sm-3 profile-sidebar">--}}
            {{--@include('people.dashboard.index')--}}

            {{--<a href="{{ url('/people/'.$contact->id.'/vcard') }}">Export as vCard</a>--}}
          {{--</div>--}}

          <div class="col-xs-12 col-sm-9">
            <div class="row section notes">
              <div class="col-xs-12 section-title">
                <contact-note v-bind:contact-id="{!! $contact->id !!}"></contact-note>
              </div>
            </div>

            <div class="row section activities">
              @include('activities.index')
            </div>

            <div class="row section reminders">
              @include('groups.reminders.index')
            </div>

            <div class="row section">
              @include('groups.tasks.index')
            </div>

            @foreach($contact->contacts as $person)
              <li class="people-list-item bg-white">
                <a href="{{ route('people.show', $person) }}">
                  @if ($person->has_avatar == true)
                    <img src="{{ $person->getAvatarURL(110) }}" width="43">
                  @else
                    @if (! is_null($person->gravatar_url))
                      <img src="{{ $person->gravatar_url }}" width="43">
                    @else
                      @if (strlen($person->getInitials()) == 1)
                        <div class="avatar one-letter" style="background-color: {{ $person->getAvatarColor() }};">
                          {{ $person->getInitials() }}
                        </div>
                      @else
                        <div class="avatar" style="background-color: {{ $person->getAvatarColor() }};">
                          {{ $person->getInitials() }}
                        </div>
                      @endif
                    @endif
                  @endif
                  <span class="people-list-item-name">
                      {{ $person->getCompleteName(auth()->user()->name_order) }}
                    </span>

                  <span class="people-list-item-information">
                      {{ trans('people.people_list_last_updated') }} {{ \App\Helpers\DateHelper::getShortDate($person->last_consulted_at) }}
                    </span>
                </a>
              </li>

            @endforeach

          </div>
        </div>

      </div>

    </div>
  </div>

@endsection
